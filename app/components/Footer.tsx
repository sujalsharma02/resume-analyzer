import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex gap-6 justify-center items-center py-6 bg-gray-900 text-white">
      <a href="https://github.com/sujalsharma02" target="_blank" rel="noreferrer">
        <Github className="w-6 h-6 hover:text-gray-400 transition" />
      </a>
      <a href="https://www.linkedin.com/in/sujalsharma02" target="_blank" rel="noreferrer">
        <Linkedin className="w-6 h-6 hover:text-gray-400 transition" />
      </a>
      <a href="https://instagram.com/sharmasujal_02" target="_blank" rel="noreferrer">
        <Instagram className="w-6 h-6 hover:text-gray-400 transition" />
      </a>
    </footer>
  );
}
