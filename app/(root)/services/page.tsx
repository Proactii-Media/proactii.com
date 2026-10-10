import Link from "next/link";
// import { deliveryServices } from "@/constants/data"
// import { afterSalesServices } from "@/constants/data"


export default function Services() {
    return (
        <>
            <div className="dlab-bnr-inr  text-center bg-pt"
                style={{
                    backgroundImage:
                        "url('/shubhamimages/banner/service1.png')",
                }}
            >
                <div className="container">
                    <div className="dlab-bnr-inr-entry align-m text-center">
                        <h1 className="text-white mb-3">Our Services</h1>

                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>Our Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="section-full bg-white content-inner">
                <div className="container">
                    <div className="section-head style2 text-center">
                        <div className="sort-title clearfix text-center">

                            <h4 style={{ fontSize: "24px" }}>Our Services</h4>
                            <p className="mt-3">At <strong> Subham Mould & Engineering</strong>, we manufacture and
                                export advanced industrial automation and machinery solutions for assembly,
                                packaging, testing, counting, and moulding applications. Our machines help
                                manufacturers improve production efficiency, precision, quality, and reduce manual
                                operations with reliable automation solutions.

                            </p>
                        </div>

                    </div>

                    <div className="section-head style2 text-center">
                        <div className="sort-title clearfix text-center">
                            <h4 style={{ fontSize: "24px" }}>Delivery Services</h4>
                        </div>
                    </div>
                    <div className="section-content p-b0">
                        <div className="row">
                            {deliveryServices.map((delivery, index) => (
                                <div
                                    className="col-lg-4 col-md-6 col-sm-6 m-b30"
                                    key={index}
                                >
                                    <div className="icon-bx-wraper dlab-box fly-box">
                                        <div className="dlab-info p-a20 text-center bg-white">

                                            <div className="icon-bx-sm radius text-red border-2 m-b20">
                                                <div className="icon-cell text-red">
                                                    <i className={delivery.icon}></i>
                                                </div>
                                            </div>

                                            <h4 className="m-a0 bg-primary content-box-head">
                                                <span className="text-white">
                                                    {delivery.title}
                                                </span>
                                            </h4>

                                            <h5>
                                                {delivery.title}
                                            </h5>

                                            <p className="m-b0">
                                                {delivery.description}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="section-full bg-white">
                <div className="container">


                    <div className="section-head style2 text-center">
                        <div className="sort-title clearfix text-center">
                            {/* <h4 style={{ font-size: "24px" }}>After Sales Services</h4> */}
                            <h4 style={{ fontSize: "24px" }}>After Sales Services</h4>

                        </div>

                    </div>

                    <div className="section-content p-b0">
                        <div className="row">
                            {afterSalesServices.map((item, index) => (
                                <div
                                    key={index}
                                    className="col-lg-4 col-md-6 col-sm-6 m-b30"
                                >
                                    <div className="dlab-box fly-box">
                                        <div className="icon-bx-wraper dlab-info p-a20 text-center bg-white">

                                            <div className="icon-bx-sm radius text-red border-2 m-b20">
                                                <div className="icon-cell text-red">
                                                    <i className={item.icon}></i>
                                                </div>
                                            </div>

                                            <h4 className="m-a0 bg-primary content-box-head">
                                                <span className="text-white">
                                                    {item.title}
                                                </span>
                                            </h4>

                                            <h5>
                                                {item.subtitle}
                                            </h5>

                                            <p className="m-b0">
                                                {item.description}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}