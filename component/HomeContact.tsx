
"use client";
import React from "react";
import { funFacts } from "@/constants/data";

export default function ContactSection() {
    return (
        <section className="section-full content-inner bg-white contact-style-1">
            <div className="container">
                <div className="row">

                    {/* Left Part - Contact Form */}
                    <div className="col-lg-6 m-b30">
                        <div className="p-a30 bg-gray clearfix radius-sm">

                            <h3>Send Message Us</h3>

                            {/* Success / Error Message */}
                            <div
                                id="formSuccessMsg"
                                className="form-success-message"
                                style={{ display: "none" }}
                            ></div>

                            <div className="dzFormMsg"></div>

                            {/* Contact Form */}
                            <form
                                method="POST"
                                action="/contact"
                                id="contactForm"
                            >
                                <input
                                    type="hidden"
                                    value="Contact"
                                    name="dzToDo"
                                />

                                <div className="row">

                                    {/* Name */}
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input
                                                    name="dzName"
                                                    type="text"
                                                    required
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input
                                                    name="dzEmail"
                                                    type="email"
                                                    required
                                                    className="form-control"
                                                    placeholder="Your Email Id"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input
                                                    name="dzOther[Phone]"
                                                    type="text"
                                                    required
                                                    className="form-control dz-number"
                                                    placeholder="Phone"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input
                                                    name="dzOther[Subject]"
                                                    type="text"
                                                    required
                                                    className="form-control"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <textarea
                                                    name="dzMessage"
                                                    rows={4}
                                                    required
                                                    className="form-control"
                                                    placeholder="Your Message..."
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-md-12">
                                        <button
                                            id="submitBtn"
                                            name="submit"
                                            type="submit"
                                            value="Submit"
                                            className="site-button"
                                        >
                                            <span className="button-text">
                                                Submit
                                            </span>

                                            <span className="button-spinner"></span>
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>

                    {/* Right Part - Google Map */}
                    <div className="col-lg-6 m-b30 d-flex">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3169.748364745238!2d72.87748337523976!3d20.40651698109164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDI0JzIzLjUiTiA3MsKwNTInNDguMiJF!5e1!3m2!1sen!2sin!4v1787547096783!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>

                    </div>

                </div>
            </div>
        </section>
    );
}

