import React from 'react';
import './feedback.module.css';
export default function Feedback() {
    return (
        <>
            <div className=" bg-columbia-blue border-2 p-8 rounded-lg max-w-3xl mx-auto mt-10">
                <h1 className="italic text-3xl font-bold text-center mb-8 ">Feedback</h1>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="feedbackFormName" className="block font-semibold pb-1">Name</label>
                            <input id="feedbackFormName" type="text" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-cerulean" placeholder="Your name" />
                        </div>
                        <div>
                            <label htmlFor="feedbackFormEmail" className="block font-semibold pb-1">Email</label>
                            <input id="feedbackFormEmail" type="email" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-cerulean" placeholder="Your email" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="feedbackFormSubject" className="block font-semibold pb-1">Subject</label>
                        <input id="feedbackFormSubject" type="text" className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-cerulean" placeholder="Subject of your feedback" />
                    </div>

                    <div>
                        <label htmlFor="feedbackFormMessage" className="block font-semibold pb-1">Message</label>
                        <textarea id="feedbackFormMessage" rows={3} className="w-full rounded-lg border border-0.2 focus:border-blue-500 px-4 py-2 shadow-md shadow-cerulean" placeholder="Your message"></textarea>
                    </div>

                    <div>
                        <label htmlFor="feedbackFormRating" className="block font-semibold pb-1">Rating</label>
                        <select id="feedbackFormRating" className="w-full rounded-2xl border border-none focus:border-blue-500 px-4 py-2  shadow-md shadow-cerulean">
                            <option value="5">Excellent</option>
                            <option value="4">Good</option>
                            <option value="3">Average</option>
                            <option value="2">Poor</option>
                            <option value="1">Terrible</option>
                        </select>
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" id="feedbackFormCheckbox" className="rounded border-gray-300 focus:border-blue-500" />
                        <label htmlFor="feedbackFormCheckbox" className="ml-2">checkbox</label>
                    </div>

                    <button type="submit" className="text-black w-full bg-indigo-dye shadow-lg shadow-cerulean text-white font-semibold py-2 rounded-lg hover:bg-cerulean transition duration-300">Submit Feedback</button>

                </form>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}
