"use client";

import { companyDetails } from "@/data/contact";
import { Form, Input, Select, Button } from "antd";

const { TextArea } = Input;
const { Option } = Select;

export default function ContactPage() {
  const whatsappNumber = companyDetails.phone.replace(/[^\d]/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const emailLink = `mailto:${companyDetails.email}`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${companyDetails.address}, ${companyDetails.country}`
  )}`;

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="mx-auto max-w-380 px-8 py-16 text-black">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-semibold uppercase">
            Please write to us should you have any enquiries or feedback
          </h1>

          <p className="mb-8 text-gray-600">
            We’re glad you’re here. Fill out this form and one of our client
            representatives will get back to you.
          </p>

          <div className="mb-6">
            <h3 className="mb-2 font-semibold">Office Address</h3>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-700 hover:underline"
            >
              {companyDetails.address}
              <br />
              {companyDetails.country}
            </a>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 font-semibold">Contact Us</h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 hover:text-green-700 hover:underline"
            >
              Phone: {companyDetails.phone}
            </a>
            <a
              href={emailLink}
              className="block text-gray-700 hover:text-green-700 hover:underline"
            >
              Email: {companyDetails.email}
            </a>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Office Hours</h3>
            <p className="text-gray-700">{companyDetails.officeHours}</p>
          </div>
        </div>

        <div className="rounded-lg bg-[#F4FAF9] p-8">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="enquiryType"
              rules={[{ required: true, message: "Please select enquiry type" }]}
            >
              <Select placeholder="Enquiry Type" className="h-10">
                <Option value="general">General Enquiry</Option>
                <Option value="sales">Sales</Option>
                <Option value="support">Support</Option>
              </Select>
            </Form.Item>

            <Form.Item name="companyName">
              <Input placeholder="Company Name (Optional)" className="h-10"/>
            </Form.Item>

            <Form.Item
              name="country"
              rules={[{ required: true, message: "Country is required" }]}
            >
              <Input placeholder="Country" className="h-10"/>
            </Form.Item>

            <Form.Item
              name="contactName"
              rules={[{ required: true, message: "Contact name is required" }]}
            >
              <Input placeholder="Contact Name" className="h-10"/>
            </Form.Item>

            <div className="grid gap-4 md:grid-cols-2">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Invalid email" },
                ]}
              >
                <Input placeholder="Email" className="h-10"/>
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[{ required: true, message: "Phone is required" }]}
              >
                <Input placeholder="Phone" className="h-10"/>
              </Form.Item>
            </div>

            <Form.Item
              name="message"
              rules={[{ required: true, message: "Message is required" }]}
            >
              <TextArea rows={4} placeholder="Message" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              style={{
                background:"green",height:"35px",fontSize:"16px",borderRadius:"5px"
              }}
              className="bg-green-700 hover:!bg-green-800"
            >
              Send Now
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
