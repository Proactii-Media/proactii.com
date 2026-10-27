"use client";

type ProcessStep = {
    title: string;
    description: string;
};

type Props = {
    serviceId: string | number;
    process?: ProcessStep[];
};

export default function ServiceWorkingProcess({
    serviceId,
    process = [],
}: Props) {
    return (
        <section
            className="tp-process-area tp-process-space pt-80"
            style={{
                backgroundColor: "#0098C6",
                opacity: 1,
                visibility: "visible",
            }}
        >
            <div className="container container-1424">
                <div className="row">
                    <div className="tp-section-content-wrapper text-center mb-75">
                        <h2
                            className="cr-section-content-title tp-section-title-teko mb-20"
                            style={{ color: "#fff" }}
                        >
                            Our Working Process
                        </h2>
                    </div>
                </div>

                <div className="tp-process-inner-item-wrap tp-process-inner-border-top pb-80">
                    <div className="row">
                        {process.map((step) => (
                            <div
                                className="col-xl-3 col-md-6"
                                key={`${serviceId}-${step.title}`}
                            >
                                <div className="tp-process-inner-item p-relative mb-40">
                                    <span className="tp-process-inner-dot" />

                                    <div
                                        className="tp-process-inner-content"
                                        style={{
                                            textAlign: "center",
                                            opacity: 1,
                                            visibility: "visible",
                                        }}
                                    >
                                        <h3 className="tp-process-inner-title mb-20">
                                            {step.title}
                                        </h3>

                                        <div className="tp-process-inner-text">
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}