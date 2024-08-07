'use client'
import React from 'react'
import Heading from '@/app/components/Heading' 
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form"; 
import axios from "axios"
import { Input } from '@/app/components/inputs/input';
import Options from '@/app/components/inputs/Options';
import TextArea from '@/app/components/inputs/TextArea';
import { Categories } from '@/utils/Categories';
import CategoryInput from '@/app/components/inputs/CategoryInput';
import CustomCheckBox from '@/app/components/inputs/CustomCheckBox';
import { SelectProduct } from '@/app/components/inputs/SelectProduct';
import { productUnit } from '@/utils/ProductUnit';
import Button from '@/app/components/Button'; 
import toast from 'react-hot-toast';
import firebaseApp from '@/libs/firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

// creating the image type
export type ImageType = {
  color: string,
  image: File | null
} 

export type UploadImageType = {
  image: string; 
}


const AddProductForm = () => { 

  const router = useRouter(); 
  const [isLoading, setIsLoading] = useState(false);  
  // Storing the images 
  const [images, setImages] = useState<ImageType[] | null>(); 
  const [isProductCreated, setIsProductCreated] = useState(false); 

  const {register, handleSubmit, setValue, watch, reset, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
      name: '', 
      brand: '', 
      description: '', 
      category: '', 
      inStock: false, 
      images: [], 
      price: ''
    }
  }) 

  
  useEffect(() => {
    setCustomValue('images', images)
  }, [images]);     

  useEffect(() => {
    if(isProductCreated){
        reset(); 
        setImages(null);
        setIsProductCreated(false); 
    }
  }, [isProductCreated]); 

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    
    // Uploading the images to firebase first.  
    // save product to mongodb.
    
    setIsLoading(true); 

    let uploadedImages: UploadImageType[] = [] 

    // Checking if the category was entered or not. 
    if(!data.category) {
      setIsLoading(false)
      return toast.error('Category is not selected')
    }  

    // Checking if the images were selected or not. 
    if(!data.images || data.images.length === 0) {
      setIsLoading(false); 
      return toast.error('No selected image!')
    } 

    const handleImageUploads = async () => {
      toast('Creating product, please wait...'); 
      try {
        for(const item of data.images) {
          if(item.image) {
            const fileName = new Date().getTime() + '-' + item.image.name; 
            const storage = getStorage(firebaseApp); // connecting to the firebaseApp with the appropriate details. 
            const storageRef = ref(storage, `products/${fileName}`);  
            const uploadTask = uploadBytesResumable(storageRef, item.image); 

            await new Promise<void>((resolve, reject) => {
              uploadTask.on(
                'state_changed', 
                (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
                  console.log('Upload is ' + progress + '% done') // Remove for later. 
                  switch(snapshot.state) {
                    case 'paused': 
                      console.log('Upload is paused');
                      break;
                    case 'running': 
                      console.log('Upload is running')
                      break; 
                  }
                }, 
                (error) => {
                  // Handling the unsuccessful uploads. 
                  console.log('Error uploading image', error)
                }, 
                () => {
                  // Handle Successful uploads on complete
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    console.log('File available at', downloadUrl);  // 
                    
                    uploadedImages.push({
                      ...item,
                      image: downloadUrl
                    }); 
                    resolve();

                  })
                  .catch((error) => {
                    console.log('Error getting the download URL', error);
                    reject(error); 
                  });
                }
              ); 
            });
          }
        }
      } catch(error) {
        setIsLoading(false); 
        console.log('Error handling image uploads', error)
        return toast.error('Error handling image uploads')
      }
    };  

    await handleImageUploads(); 
    const productData = {...data, images: uploadedImages}

    // submtting the product to mongodb with the links. 
    axios.post('/api/product', productData).then(() => {
      toast.success('Product created'); 
      setIsProductCreated(true); 
      router.refresh();      
    }).catch((error) => {
      toast.error('Something went wrong when saving product to db');
    }).finally(() => {
      setIsLoading(false)
    }) 

  };

  const category = watch('category');  

  const brand = watch('brand')

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
        shouldValidate: true, 
        shouldDirty: true, 
        shouldTouch: true
    })
  };   

  // Adding an Image to a state. 
  const addImageToState = useCallback((value: ImageType) => {
    setImages((prev) => {
        if(!prev) {
            return [value]
        }

        return [...prev, value]
    })
  }, []); 

  // Removing the Image from a state. 
  const removeImageFromState = useCallback((value: ImageType) => {
    setImages((prev) => {

        if(prev) {
            const filteredImages = prev.filter((item) => item.color !== value.color) 
            return filteredImages
        }

        return prev
    })
  }, [])


  return (
    <> 
        <Heading title="Add a Product" center /> 

        {/* Adding the Inputs */} 
        <Input 
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors = {errors}
            required
        /> 

        {/* Adding the brand options */} 
        <Options id='brand' register={register}/> 

        {/* Adding the price */} 
        <Input 
            id="price"
            label="Price"
            disabled={isLoading}
            register={register}
            type="number"
            errors = {errors}
            required
        /> 

        {/* Adding the Description */} 
        <TextArea 
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors = {errors}
          required
        />  

        {/* Adding the Category input */}

        <div className='w-full font-medium'> 
          <div className='mb-2 font-sembold'> Select a Category </div> 
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto"> 
            {Categories.map((item) => {
                if(item.label === 'All') {
                    return null; 
                } 

                return (
                  <div key={item.label} className="col-span"> 
                      <CategoryInput 
                        onClick={(category) => setCustomValue('category', category)}
                        selected={category === item.label}
                        label={item.label}
                        icon = {item.icon}
                      />
                  </div>
                )

            })}
          </div>
        </div> 

        {/* Declaring if the product is in stock */}
        <CustomCheckBox id="inStock" register={register} 
        label="This product is in stock" />  

        {/* Adding the images */} 
        <div className='w-full flex flex-col flex-wrap gap-4'> 
            <div> 
                <div className="font-bold"> 
                    Upload an image 
                </div> 
                <div className="grid grid-cols-2 gap-3">
                      {productUnit.map((item, index) => {
                        return <SelectProduct key={index} item={item} removeImageFromState={removeImageFromState} 
                          addImageToState={addImageToState} isProductCreated={isProductCreated}
                        />
                      })}
                </div>
            </div>
        </div> 
        
        {/* Submitting the Button */}
        <Button label={isLoading ? 'Loading...' : 'Add Product'}
        onClick={handleSubmit(onSubmit)} />

    </>
  )
}

export default AddProductForm