import { Smile } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Hello everyone</h1>
      <span> My name is <b>Yuliia Malovichko</b> and I am a <b>Frontend developer</b> <Smile className="mx-2" /></span>
      <div className="flex align-middle"><b>P.s.</b> the website is still
        <img className="w-36" src="https://www.cq5.hostsolution.in/lib/images/work-in-progress.png" alt="Work In Progress Icon" /></div>
    </div>

  )
}

export default Introduction