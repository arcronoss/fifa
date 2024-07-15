import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterForm.css";
import translations from "./translations"; // นำเข้า translations
import ProfileUploader from "./Profile";
import bcrypt from 'bcryptjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en"); // Default language
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_citizen_id: "",
    customer_email: "",
    customer_hashpassword: "",
    customer_sex: "",
    customer_address: "",
    customer_telephone: "",
    province: "", 
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State สำหรับการแสดง/ซ่อนรหัสผ่าน

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.customer_address) {
      alert("กรุณาเลือกจังหวัด"); // เตือนให้เลือกจังหวัดหากยังไม่ได้เลือก
      return;
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(formData.customer_hashpassword, 10);
  
    try {
      const response = await axios.post(
        "http://localhost/server_react/register.php",
        {
          ...formData,
          customer_hashpassword: hashedPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/");
      setMessage(response.data.message || response.data.error);
    } catch (error) {
      setMessage("Registration failed: " + error.message);
    }
  };

  return (
    <div className="form-control">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="select-container">
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              className="select1"
            >
              <option className="option" value="en">
                EN
              </option>
              <option className="option" value="th">
                ไทย
              </option>
              <option className="option" value="jp">
                日本語
              </option>
            </select>
          </div>
          <ProfileUploader />
          <label className="label-style">
            {translations[language].name}:
            <input
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label className="label-style">
            {translations[language].idCard}:
            <input
              type="text"
              name="customer_citizen_id"
              value={formData.customer_citizen_id}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label className="label-style">
            {translations[language].email}:
            <input
              type="email"
              name="customer_email"
              value={formData.customer_email}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <label className="label-style">
            {translations[language].password}:
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="customer_hashpassword"
                value={formData.customer_hashpassword}
                onChange={handleChange}
                className="input"
                maxLength={25} // Maximum 25 characters
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </label>
          <label className="label-style">
            {translations[language].sex}:
            <select
              name="customer_sex"
              value={formData.customer_sex}
              onChange={handleChange}
              className="select"
              required
            >
              <option value="">{translations[language].select}</option>
              <option value="Male">{translations[language].male}</option>
              <option value="Female">{translations[language].female}</option>
              <option value="Other">{translations[language].other}</option>
            </select>
          </label>
          <label className="label-style">
            {translations[language].address}:
            <select
              name="customer_address"
              value={formData.customer_address}
              onChange={handleChange}
              className="select"
              required
            >
              <option value="">{translations[language].select}</option>
              <option value="Bangkok">{translations[language].bangkok}</option>
              <option value="Suphanburi">
                {translations[language].suphanburi}
              </option>
              <option value="Muengthong">
                {translations[language].muengthong}
              </option>
              {/* เพิ่มตัวเลือกของจังหวัดเพิ่มเติมตามที่คุณต้องการ */}
            </select>
          </label>
          <label className="label-style">
            {translations[language].phoneNumber}:
            <input
              type="text"
              name="customer_telephone"
              value={formData.customer_telephone}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <button type="submit" className="button">
            {translations[language].submit}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterForm;
