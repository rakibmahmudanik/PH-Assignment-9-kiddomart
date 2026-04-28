import React, { useState } from "react";
import { Truck, FileText, ShieldCheck, RefreshCcw } from "lucide-react";

const InfoBar = () => {
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const infoItems = [
    {
      id: "delivery",
      icon: <Truck className="w-8 h-8 text-[#615fff]" />,
      title: "Free Delivery",
      subtitle: "For Order over 500$*",
      content:
        "Enjoy free shipping on all orders exceeding 500$. We deliver nationwide using our trusted logistics partners within 3-5 business days.",
    },
    {
      id: "terms",
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Terms & Conditions",
      subtitle: "Legal usage & guidelines",
      content:
        "By using our service, you agree to our standard operating procedures. This includes user conduct, intellectual property rights, and limitation of liability.",
    },
    {
      id: "privacy",
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Privacy Policy",
      subtitle: "How we protect your data",
      content:
        "Your data security is our priority. We use industry-standard encryption to ensure that your personal and payment information remains private.",
    },
    {
      id: "returns",
      icon: <RefreshCcw className="w-8 h-8 text-info" />,
      title: "Returns Policy",
      subtitle: "Easy 7-day replacements",
      content:
        "Not satisfied? Return any product within 7 days of delivery. Items must be in original packaging and unused condition to qualify for a refund.",
    },
  ];

  const openModal = (item) => {
    setModalContent({ title: item.title, body: item.content });
    document.getElementById("info_modal").checked = true;
  };

  return (
    <div>
      <div className="text-center  my-10 px-6">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
          Easy Shopping,{" "}
          <span className="text-primary italic">Happy Little Moments!</span>
        </h1>

        <p className="text-base md:text-md text-base-content/60 font-medium max-w-2xl mx-auto">
          Everything you need to make parenting easier and playtime better—with
          fast delivery and easy returns.
        </p>

        <hr className="w-20 border-2 mt-5 border-[#615fff] rounded-2xl mx-auto"></hr>
      </div>
      <div className="w-full bg-base-200 py-10 px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Grid Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="group flex flex-col items-center text-center p-6 bg-base-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-base-300"
            >
              <div className="mb-4 p-3 bg-base-200 rounded-full group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-base-content">
                {item.title}
              </h3>
              <p className="text-sm text-base-content/60 mt-1">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* DaisyUI Modal Structure */}
        <input type="checkbox" id="info_modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle" role="dialog">
          <div className="modal-box">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold">{modalContent.title}</h3>
            </div>
            <p className="py-4 text-base-content/80 leading-relaxed">
              {modalContent.body}
            </p>
            <div className="modal-action">
              <label
                htmlFor="info_modal"
                className="btn bg-[#615fff] px-8 text-white"
              >
                Close
              </label>
            </div>
          </div>
          <label className="modal-backdrop" htmlFor="info_modal">
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
