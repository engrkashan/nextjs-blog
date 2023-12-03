import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p>Copyright 2023 Kashan pro | All Rights Reserved</p>
      <div className="flex gap-x-9">
        <Link href="/">Terms & Conditions</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
