import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: 'BestHubs Admin', 
    description: 'BestHubs Admin Dashbaord'
}  

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
          <div className="pt-28"> 
            <AdminNav /> 
          </div>
          {children}
      </div>
    )
  }
  
  export default AdminLayout; 

