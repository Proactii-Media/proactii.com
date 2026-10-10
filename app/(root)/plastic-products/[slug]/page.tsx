import Link from "next/link";
import { notFound } from "next/navigation";


interface ProductDetailsProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Engineeringplasticproduct({
    params,
}: ProductDetailsProps) {
    const { slug } = await params;

    const product = plasticproduct.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    const productTitle = product.title.replace(
        /\s*\([^)]*\)/g,
        ""
    );

    return (
        <div className="page-content bg-white">

            {/* ================= BANNER ================= */}
            <div
                className="dlab-bnr-inr bg-pt product-banner"
                style={{
                    backgroundImage: `url('${product.bannerImage}')`,
                }}
            >
                <div className="container">
                    <div className="dlab-bnr-inr-entry">

                        <h1 className="text-white product-banner-title">
                            {productTitle}
                        </h1>

                        <div className="breadcrumb-row">
                            <ul className="list-inline">

                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/engineering-plasticproduct">
                                        plasticproduct
                                    </Link>
                                </li>

                                {/* <li>
                                    {productTitle}
                                </li> */}

                            </ul>
                        </div>

                    </div>
                </div>
            </div>


            {/* ================= CONTENT ================= */}
            <div className="content-block">

                <div className="section-full content-inner">

                    <div className="container">

                        <div className="row">

                            {/* ================= SIDEBAR ================= */}
                            <div className="col-xl-3 col-lg-4 col-md-5">

                                <div className="widget sidebar-widget ext-sidebar-menu widget_nav_menu">

                                    <ul className="menu">

                                        {plasticproduct.map((item) => (

                                            <li
                                                key={item.slug}
                                                className={
                                                    product.slug === item.slug
                                                        ? "active"
                                                        : ""
                                                }
                                            >
                                                <Link
                                                    href={`/engineering-plasticproduct/${item.slug}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>

                                        ))}

                                    </ul>

                                </div>


                                {/* BROCHURE */}
                                <div className="widget">

                                    <div className="download-file">

                                        <h4 className="title">
                                            Get our brochures
                                        </h4>

                                        <ul>

                                            <li>

                                                <a
                                                    href="/shubhamimages/subham.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="text">
                                                        Company Brochures
                                                    </div>

                                                    <i className="fas fa-download"></i>
                                                </a>

                                            </li>

                                        </ul>

                                    </div>

                                </div>

                            </div>


                            {/* ================= MAIN CONTENT ================= */}
                            <div className="col-xl-9 col-lg-8 col-md-7 m-b30">


                                {/* PRODUCT DETAIL IMAGE */}
                                <div className="dz-media rounded-sm">

                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            width: "100%",
                                            height: "450px",
                                            objectFit: "contain",
                                        }}
                                    />

                                </div>


                                {/* PRODUCT DESCRIPTION */}
                                <div className="dz-content m-t30">

                                    <div className="m-b40">

                                        <h4 className="title">
                                            {productTitle}
                                        </h4>

                                        <p
                                            className="font-18"
                                            style={{
                                                textAlign: "justify",
                                            }}
                                        >
                                            {product.description}
                                        </p>

                                    </div>


                                    {/* ================= KEY FEATURES AND FUNCTIONALITY ================= */}
                                    <div className="sort-title clearfix text-center">

                                        <h4>
                                            Key Features and Functionality
                                        </h4>

                                    </div>


                                    <ul
                                        style={{
                                            paddingLeft: 0,
                                            marginLeft: 0,
                                            listStylePosition: "outside",
                                        }}
                                    >

                                        {product.keyFeatures?.map(
                                            (feature, index) => (

                                                <li
                                                    key={index}
                                                    style={{
                                                        paddingBottom: "12px",
                                                        lineHeight: "1.6",
                                                        paddingLeft: "5px",
                                                        marginLeft: "20px",
                                                        textAlign: "justify",
                                                    }}
                                                >

                                                    <strong
                                                        style={{
                                                            color: "#232323",
                                                        }}
                                                    >
                                                        {feature.title}:
                                                    </strong>{" "}

                                                    {feature.description}

                                                </li>

                                            )
                                        )}

                                    </ul>


                                    {/* ================= TECHNICAL SPECIFICATIONS ================= */}
                                    <div className="sort-title clearfix text-center">

                                        <h4>
                                            Technical Specifications
                                        </h4>

                                    </div>


                                    <table className="table table-striped mb-5">

                                        <thead>

                                            <tr className="specification-header">

                                                <th>
                                                    Mode Of Production
                                                </th>

                                                <th>
                                                    Details
                                                </th>

                                            </tr>

                                        </thead>


                                        <tbody>

                                            {Object.entries(
                                                product.specifications || {}
                                            ).map(([key, value]) => (

                                                <tr key={key}>

                                                    <th>
                                                        {key}
                                                    </th>

                                                    <td>
                                                        {value}
                                                    </td>

                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>


                                    {/* ================= KEY FEATURES & BENEFITS ================= */}
                                    <div className="row d-flex align-items-center m-b40">

                                        <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">

                                            <div>

                                                <h4>
                                                    Key Features & Benefits
                                                </h4>

                                            </div>


                                            <ul className="list-checked black">

                                                {product.features?.map(
                                                    (feature, index) => (

                                                        <li key={index}>
                                                            {feature}
                                                        </li>

                                                    )
                                                )}

                                            </ul>

                                        </div>


                                        {/* ================= VIDEO / PRODUCT IMAGE ================= */}
                                        <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6 m-b30">

                                            <div
                                                className="video-bx"
                                                id="videoBox"
                                            >

                                                {/* Product Image */}
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="video-thumbnail"
                                                />


                                                {/* Video Available */}
                                                {product.video ? (

                                                    <div className="video-play-icon">

                                                        <a
                                                            href={product.video}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="bg-primary"
                                                        >
                                                            <i className="fas fa-play"></i>
                                                        </a>

                                                    </div>

                                                ) : (

                                                    /* Video Not Available */
                                                    <div className="video-not-available">

                                                        <i className="fas fa-video-slash"></i>

                                                        <span>
                                                            Video Not Available
                                                        </span>

                                                    </div>

                                                )}

                                            </div>

                                        </div>

                                    </div>


                                    {/* ================= APPLICATIONS ================= */}
                                    <div className="section-full bg-white mt-3 bg-img-fix">

                                        <div className="container">

                                            <div className="row">

                                                <div className="col-md-12">

                                                    <div className="sort-title clearfix text-center">

                                                        <h4>
                                                            Applications
                                                        </h4>

                                                    </div>


                                                    <div className="section-content box-sort-in m-b10 p-b0 button-example m-b30">

                                                        <div className="row">

                                                            <div className="col-md-12">

                                                                <ul className="list-star red list-box">

                                                                    {product.applications?.map(
                                                                        (
                                                                            application,
                                                                            index
                                                                        ) => (

                                                                            <li
                                                                                key={index}
                                                                            >
                                                                                {application}
                                                                            </li>

                                                                        )
                                                                    )}

                                                                </ul>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}