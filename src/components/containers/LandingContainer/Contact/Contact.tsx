"use client";

// base
import { useState } from "react";
// lib
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
// components
import { FullCollapse } from "#/src/components/common/FullCollapse/FullCollapse";
// anim
import { FadeInUp } from "#/src/components/common/Animation/FadeInUp/FadeInUp";
// data
import { items } from "#/src/core/data/Contact/Contact";
import { ContactForm } from "./ContactForm/ContactForm";

// type
import { IContactValues } from "#/src/core/types/formikValues/Contact/Contact.values";

const Contact = () => {
  const [initialValues, setInitialValues] = useState<IContactValues>({
    userName: "",
    email: "",
    textQuot: "",
    phoneNumber: "",
    message: "",
  });

  const onSubmit = (values: IContactValues) => {
    console.log("values", values);
  };

  return (
    <section
      className="mt-[9rem] pb-[8rem] relative
              before:absolute before:left-0 before:bottom-0 before:w-full before:h-[217px]
              before:bg-[#1a1b1d] before:-z-10 before:content-['']"
    >
      <motion.div
        className="grid lg:grid-cols-2 max-w-[1280px] mx-4 sm:mx-12 lg:mx-4 xl:mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <div className="bg-white shadow-[0px_11px_109px_0px_rgba(0,0,0,0.14)] rounded-r-xl ">
          <FadeInUp duration={1.2}>
            <FullCollapse items={items} className=" mt-8 md::mt-16" />
          </FadeInUp>
        </div>

        {/* formik */}
        <div className="bg-gt-gradient-1 rounded-l-xl  ">
          <Formik
            initialValues={initialValues}
            enableReinitialize
            // validationSchema={}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                <ContactForm />
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
    </section>
  );
};

export { Contact };
