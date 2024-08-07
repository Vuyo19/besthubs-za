import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: 'BestHubs Admin', 
    description: 'BestHubs Admin Dashbaord'
}  

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
          <AdminNav /> 
          {children}
      </div>
    )
  }
  
  export default AdminLayout; 

