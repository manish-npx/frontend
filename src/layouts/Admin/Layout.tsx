import { useState } from "react"
import Sidebar from "./Sidebar"
import TopHeader from "./TopHeader"
import { IToogled, ChildProp } from "../../types/commonTypes";
import Breadcrumbs from "./Breadcrumbs";
import AdminFooter from "./AdminFooter";


const Layout: React.FC<ChildProp> = ({ children }: ChildProp): JSX.Element => {

    const [toggleMenu, setToggleMenu] = useState<IToogled>('toggled')

    return (
        <>
            <div className={`page-wrapper Limedesk-theme ${toggleMenu}`}>

                <Sidebar />
                <main className="page-content bg-light">
                    <TopHeader setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
                    <Breadcrumbs>
                        {children}
                    </Breadcrumbs>
                    <AdminFooter />
                </main>

            </div>

        </>
    )
}

export default Layout
