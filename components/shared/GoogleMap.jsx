import React from "react";

const GoogleMap = () => {
  return (
    <div className=" bg-[#1E2538]">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d554871.5059500557!2d-82.78393430439208!3d27.99408949632453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL%2C%20USA!5e1!3m2!1sen!2sbd!4v1734518106198!5m2!1sen!2sbd"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
