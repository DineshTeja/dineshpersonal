import { Dialog } from "@headlessui/react";
import AnimatedGradientText from "./animated-gradient-text";
import { BorderBeam } from "./border-beam";

const ResumeDialog = ({ isOpen, onClose }) => {
  const handleDownloadClick = () => {
    document.getElementById("downloadResumeLink").click();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto rounded-lg">
      <div className="flex min-h-screen items-center justify-center p-4 text-center rounded-2xl h-[90vh]">
        <Dialog.Panel className="w-full max-w-6xl rounded bg-white p-6 relative overflow-hidden flex flex-col justify-between h-[90vh]">
          <button onClick={onClose} className="absolute top-3 right-3 text-lg">✖️</button>
          <iframe src="DineshV_Resume.pdf" width="100%" height="95%" style={{ border: 'none' }}></iframe>
          <AnimatedGradientText className="mt-1 self-center" onClick={handleDownloadClick} style={{ position: 'relative', zIndex: 2 }}>
            <a href="DineshV_Resume.pdf" download className={`inline animate-gradient bg-gradient-to-r from-[#ffaa40] 
                    via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] 
                    bg-clip-text text-transparent font-semibold`}>Download</a>
            <BorderBeam size={250} duration={5} delay={4} />
          </AnimatedGradientText>
          <a href="DineshV_Resume.pdf" download id="downloadResumeLink" style={{ display: 'none' }}>Download</a>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ResumeDialog;