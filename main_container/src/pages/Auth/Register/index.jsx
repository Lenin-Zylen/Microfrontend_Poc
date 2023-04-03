import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { createUser, updateUser } from "../../../apis";
import { toast } from "react-toastify";
import { isEmpty, get } from "lodash";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const editUser = get(location, "state", "");

  const [formData, setFormData] = useState({
    email: isEmpty(editUser) ? "" : editUser.email,
    password: "",
    firstName: isEmpty(editUser) ? "" : editUser.firstName,
    loginid: isEmpty(editUser) ? "" : editUser.loginid,
    lastName: isEmpty(editUser) ? "" : editUser.lastName,
    userType: "client",
    subscription: isEmpty(editUser) ? [] : editUser.subscription,
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const checkBoxHandler = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        subscription: [e.target.value, ...formData.subscription],
      });
    } else {
      const updatedSubscription = formData.subscription.filter(
        (item) => item !== e.target.value
      );
      setFormData({ ...formData, subscription: updatedSubscription });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    createUser(callback, formData);
  };
  const onUpdate = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    const payload = { ...formData };
    payload.id = editUser.id;
    updateUser(callback, payload);
  };

  const callback = (data) => {
    if (data.status === 200) {
      toast.success(data.message);
      navigate("/dashboard");
    } else {
      toast.error();
    }
  };

  return (
    <Layout>
      <form className="m-4" onSubmit={isEmpty(editUser) ? onSubmit : onUpdate}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              User Information
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  for="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    onChange={(e) => onChange(e)}
                    value={formData.firstName}
                    id="first-name"
                    autocomplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    onChange={(e) => onChange(e)}
                    value={formData.lastName}
                    id="last-name"
                    autocomplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User Id / Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="loginid"
                    onChange={(e) => onChange(e)}
                    value={formData.loginid}
                    id="last-name"
                    autocomplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    onChange={(e) => onChange(e)}
                    value={formData.email}
                    type="email"
                    autocomplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    type="text"
                    name="password"
                    onChange={(e) => onChange(e)}
                    value={formData.password}
                    autocomplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Subscription
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please chose the modules, you want the user to have.
            </p>

            <div className="mt-4 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  By Modules
                </legend>
                <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                  <div className="mt-6 space-y-6 sm:col-span-2">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          value={"PE"}
                          checked={formData.subscription.includes("PE")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="comments"
                          className="font-medium text-gray-900"
                        >
                          Patient Engagement
                        </label>
                        <p className="text-gray-500">Patient Engagement</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          value={"RCM"}
                          checked={formData.subscription.includes("RCM")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="candidates"
                          className="font-medium text-gray-900"
                        >
                          RCM
                        </label>
                        <p className="text-gray-500">
                          Revenue Cycle Management
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          value={"ERX"}
                          checked={formData.subscription.includes("ERX")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="offers"
                          className="font-medium text-gray-900"
                        >
                          ERX
                        </label>
                        <p className="text-gray-500">E-Prescription Module</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          value={"CIS"}
                          checked={formData.subscription.includes("CIS")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="offers"
                          className="font-medium text-gray-900"
                        >
                          CIS
                        </label>
                        <p className="text-gray-500">E-Prescription Module</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-6 sm:col-span-2">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          value={"VOIP"}
                          checked={formData.subscription.includes("VOIP")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="comments"
                          className="font-medium text-gray-900"
                        >
                          VOIP
                        </label>
                        <p className="text-gray-500">Voice Over IP</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          checked={formData.subscription.includes(
                            "SERVICE_DESK"
                          )}
                          value={"SERVICE_DESK"}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="candidates"
                          className="font-medium text-gray-900"
                        >
                          Service Desk
                        </label>
                        <p className="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          value={"CRM"}
                          checked={formData.subscription.includes("CRM")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="offers"
                          className="font-medium text-gray-900"
                        >
                          CRM
                        </label>
                        <p className="text-gray-500">
                          Customer Relationship Management
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          value={"PMS"}
                          checked={formData.subscription.includes("PMS")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="offers"
                          className="font-medium text-gray-900"
                        >
                          PMS
                        </label>
                        <p className="text-gray-500">
                          Patient Management System
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-6 sm:col-span-2">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          value={"EV"}
                          checked={formData.subscription.includes("EV")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="comments"
                          className="font-medium text-gray-900"
                        >
                          EV
                        </label>
                        <p className="text-gray-500">EV Module</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          value={"PACS"}
                          checked={formData.subscription.includes("PACS")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="candidates"
                          className="font-medium text-gray-900"
                        >
                          PACS
                        </label>
                        <p className="text-gray-500">PACS Module</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          value={"AI"}
                          checked={formData.subscription.includes("AI")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="offers"
                          className="font-medium text-gray-900"
                        >
                          AI
                        </label>
                        <p className="text-gray-500">Artifical Intelligence</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          value={"BI"}
                          checked={formData.subscription.includes("BI")}
                          onChange={(e) => checkBoxHandler(e)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          for="offers"
                          className="font-medium text-gray-900"
                        >
                          BI
                        </label>
                        <p className="text-gray-500">BI Module</p>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to="/dashboard">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
          </Link>

          <button
            type="submit"
            className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isEmpty(editUser) ? "Save" : "Update"}
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Register;
