import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiSolidCloudUpload } from "react-icons/bi";
import { BsFileEarmarkPdfFill, BsFillFilePdfFill } from "react-icons/bs";
import { FaCheck, FaCode } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { IoArrowForwardOutline, IoDocumentText } from "react-icons/io5";

function UploadCenter() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-3 justify-between">
        <div className="flex flex-col gap-3.5">
          <h1 className="text-[32px] font-jost text-black font-bold">
            Upload Center
          </h1>
          <p className="font-quicksand text-base text-black100">
            Upload all required files and information for your project.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-base font-quicksand text-brown">
            <AiOutlineQuestionCircle className="w-4 h-4" /> Upload Guidelines
          </div>
          <div className="flex items-center gap-2 text-base font-quicksand text-brown">
            <FiInfo className="w-4 h-4" /> Upload Tips
          </div>
        </div>
      </div>

      {/* Document Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* 1. Demo Video */}
        <div className=" rounded-xl border border-brown divide-y divide-brown">
          <div className="flex flex-col gap-6 p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#312E81] flex items-center justify-center text-white shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-text-primary">
                    1. Demo Video
                  </span>
                </div>
                <div className="border border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand">
                  Required
                </div>
              </div>
              <p className="text-black text-xs font-quicksand max-w-[30ch]">
                Upload a 2 - 5 minute demo video showcasing your solution.
              </p>
            </div>
            <div className="rounded-xl border border-brown/50 border-dashed p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop"
                    alt="Demo Video"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-10">
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">
                      edumate-demo.mp4
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      MP4 • 45.6 MB
                    </p>
                  </div>
                  <FaCheck className="w-4 h-4 text-investors-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-7.5">
            <div className="flex items-center gap-2 justify-between">
              <p className="text-xs font-bold font-quicksand text-upload-green">
                Uploaded successfully
              </p>
              <button className="border  cursor-pointer border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand hover:bg-icon-gray transition-all hover:text-white">
                Replace File
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-brown text-xs font-bold font-quicksand">
              <FiInfo className="w-4 h-4" />
              Max size: 200MB | Format: MP4
            </div>
          </div>
        </div>

        {/* 2. Pitch Deck */}
        <div className=" rounded-xl border border-brown divide-y divide-brown">
          <div className="flex flex-col gap-6 p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BsFillFilePdfFill className="w-8 h-8 text-[#F43F5E]" />
                  <span className="text-sm font-bold text-text-primary">
                    2. Pitch Deck
                  </span>
                </div>
                <div className="border border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand">
                  Required
                </div>
              </div>
              <p className="text-black text-xs font-quicksand max-w-[30ch]">
                Upload your pitch deck that explains your solution and impact.
              </p>
            </div>
            <div className="rounded-xl border border-brown/50 border-dashed p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                  <BsFileEarmarkPdfFill className="w-8 h-8 text-[#F43F5E]" />
                </div>
                <div className="flex items-center gap-10">
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">
                      edumate-pitchdeck.pdf
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      MP4 • 45.6 MB
                    </p>
                  </div>
                  <FaCheck className="w-4 h-4 text-investors-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-7.5">
            <div className="flex items-center gap-2 justify-between">
              <p className="text-xs font-bold font-quicksand text-upload-green">
                Uploaded successfully
              </p>
              <button className="border  cursor-pointer border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand hover:bg-icon-gray transition-all hover:text-white">
                Replace File
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-brown text-xs font-bold font-quicksand">
              <FiInfo className="w-4 h-4" />
              Max size: 200MB | Format: MP4
            </div>
          </div>
        </div>

        {/* 3. Documentation */}
        <div className=" rounded-xl border border-brown divide-y divide-brown">
          <div className="flex flex-col gap-6 p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center text-white shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-text-primary">
                    3. Documentation
                  </span>
                </div>
                <div className="border border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand">
                  Required
                </div>
              </div>
              <p className="text-black text-xs font-quicksand max-w-[30ch]">
                Upload the project documentation (PDF/DOCX).
              </p>
            </div>
            <div className="rounded-xl border border-brown/50 border-dashed p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IoDocumentText className="w-8 h-8 text-[#0EA5E9]" />
                <div>
                  <div className="flex items-center gap-10">
                    <div>
                      <p className="text-[12px] font-bold text-text-primary">
                        edumate-pitchdeck.pdf
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        MP4 • 45.6 MB
                      </p>
                    </div>
                    <FaCheck className="w-4 h-4 text-investors-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-7.5">
            <div className="flex items-center gap-2 justify-between">
              <p className="text-xs font-bold font-quicksand text-upload-green">
                Uploaded successfully
              </p>
              <button className="border  cursor-pointer border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand hover:bg-icon-gray transition-all hover:text-white">
                Replace File
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-brown text-xs font-bold font-quicksand">
              <FiInfo className="w-4 h-4" />
              Max size: 200MB | Format: MPF, DOCX
            </div>
          </div>
        </div>

        {/* 4. Source Code */}
        <div className=" rounded-xl border border-brown divide-y divide-brown">
          <div className="flex flex-col gap-6 p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-shield flex items-center justify-center text-white shrink-0">
                    <FaCode className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-text-primary">
                    4. Source Code
                  </span>
                </div>
                <div className="border border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand">
                  Required
                </div>
              </div>
              <p className="text-black text-xs font-quicksand max-w-[30ch]">
                Provide a link to your GitHub repository or upload your code
                (.zip).
              </p>
            </div>
            <div className="rounded-xl border border-brown/50 border-dashed p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                <div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">
                      github.com/visionai/edumate-ai
                    </p>
                    <div className="flex items-center gap-10">
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Private Repository
                      </p>
                      <FaCheck className="w-4 h-4 text-investors-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-7.5">
            <div className="flex items-center gap-2 justify-between">
              <p className="text-xs font-bold font-quicksand text-upload-green">
                Link verified successfully
              </p>
              <button className="border  cursor-pointer border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand hover:bg-icon-gray transition-all hover:text-white">
                Change Link
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-brown text-xs font-bold font-quicksand">
              <FiInfo className="w-4 h-4" />
              GitHub link or ZIP (Max: 200MB)
            </div>
          </div>
        </div>

        {/* 5. Use Prototype */}
        <div className=" rounded-xl border border-brown divide-y divide-brown">
          <div className="flex flex-col gap-6 p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E] flex items-center justify-center text-white shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-text-primary">
                    5. Use Prototype
                  </span>
                </div>
                <div className="border border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand">
                  Required
                </div>
              </div>
              <p className="text-black text-xs font-quicksand max-w-[30ch]">
                Provide a link to your live prototype or deployed application.
              </p>
            </div>
            <div className="rounded-xl border border-brown/50 border-dashed p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">
                      Website URL
                    </p>
                    <div className="flex items-center gap-10">
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        https://edumate-ai_vercel.app
                      </p>
                      <FaCheck className="w-4 h-4 text-investors-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-7.5">
            <div className="flex items-center gap-2 justify-between">
              <p className="text-xs font-bold font-quicksand text-upload-green">
                Link verified successfully
              </p>
              <button className="border  cursor-pointer border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand hover:bg-icon-gray transition-all hover:text-white">
                Change Link
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-brown text-xs font-bold font-quicksand">
              <FiInfo className="w-4 h-4" />
              Website, Web App or Mobile App URL
            </div>
          </div>
        </div>

        {/* 6. Screenshots */}
<div className=" rounded-xl border border-brown divide-y divide-brown">
          <div className="flex flex-col gap-6 p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0EA5E9] flex items-center justify-center text-white shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold text-text-primary">
                6. Screenshots
              </span>
                </div>
                <div className="border border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand">
                  Required
                </div>
              </div>
              <p className="text-black text-xs font-quicksand max-w-[30ch]">
                Upload screenshots of your product 
(Max 10 images).
              </p>
            </div>
             <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop"
                className="w-full h-full object-cover"
                alt="Screenshot 1"
              />
            </div>
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop"
                className="w-full h-full object-cover"
                alt="Screenshot 2"
              />
            </div>
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop"
                className="w-full h-full object-cover"
                alt="Screenshot 3"
              />
            </div>
            <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center text-white cursor-pointer shrink-0 hover:bg-gray-800 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>

          </div>
          <div className="p-5 flex flex-col gap-7.5">
            <div className="flex items-center gap-2 justify-between">
              <p className="text-xs font-bold font-quicksand text-upload-green">
                8 of 10 uploaded
              </p>
              <button className="border  cursor-pointer border-icon-gray py-1.25 px-2.5 text-black rounded-md text-xs font-quicksand hover:bg-icon-gray transition-all hover:text-white">
                Add More
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-brown text-xs font-bold font-quicksand">
              <FiInfo className="w-4 h-4" />
             Format: JPG, PNG (Max: 10MB each)
            </div>
          </div>
        </div>


      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 border border-slate200 bg-btn-bg rounded-md flex flex-col gap-4 items-center justify-center">
            <BiSolidCloudUpload className="w-8 h-8 text-black" />
            <div className="flex flex-col gap-3.5 items-center">
                <span className="text-black100 font-quicksand font-semibold text-xs">Click to upload or drag and drop</span>
                <span className="text-black100 font-quicksand text-[10px]">PDF,PNG,DOC,DOCX[MAX. 200MB]</span>
            </div>
            <button className="border border-icon-gray py-1.25 px-8 cursor-pointer text-black rounded-md text-xs font-quicksand hover:bg-icon-gray transition-all hover:text-white">
                Browse Files
              </button>
        </div>
        <div className="border border-brown p-5 flex flex-col gap-9 rounded-2xl">
            <div className="flex flex-col gap-1">
                <h3 className="font-jost text-base text-black font-medium">Need Help?</h3>
                <p className="text-black text-xs font-quicksand max-w-[30ch]">Check our upload guidelines or contact support.</p>
            </div>
            <button className="bg-brand hover:bg-shield transition-all rounded-md cursor-pointer text-black flex gap-4 p-3 text-xs font-bold items-center justify-center">View Guidelines <IoArrowForwardOutline className="w-4 h-4 text-black" /></button>
        </div>
      </div>
    </section>
  );
}

export default UploadCenter;
