import Link from "next/link";

import { clientLogos} from "@/constants/data"

export default function clinetLogos() {
    return (
        <>
         	<div className="dlab-bnr-inr text-center bg-pt"
				style={{
          backgroundImage:
            "url('/shubhamimages/banner/clientbanner.png')",
        }}
				>
				<div className="container">
					<div className="dlab-bnr-inr-entry align-m text-center">
						<h1 className="text-white mb-3">Our Trusted Clients</h1>

						<div className="breadcrumb-row">
							<ul className="list-inline">
								<li>
									<Link href="/">Home</Link>
									</li>
								<li>Our Trusted Clients</li>
							</ul>
						</div>
					</div>
				</div>
			</div>


              <div className="bg-gray lightgallery" id="lightgallery">
            
                <div className="section-full bg-gray content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-head style2 text-center">
                                    <h2 className="title m-b10">Our Awesome Clients</h2>

                                </div>
                           
                                <div className="section-content box-sort-in button-example p-b0">
                                    <div className="row">

                                             {clientLogos.map((logo, index) => (

                                            <div className="col-lg-3 col-md-6 col-sm-6 m-b15"
                                            key={index}
                                            >
                                                <div className="dlab-box client-logo-box">


                                                    <div className="dlab-media dlab-img-overlay9 client-logo-media">
                                                        <img src={logo.image} alt="Client Logo" />
                                                    </div>


                                                </div>
                                            </div>

                                         ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
                </div>
            </div>
        </>
    )
}