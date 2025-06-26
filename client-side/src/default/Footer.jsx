import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-2">Contact</h2>
          <p>Email: <a href="mailto:farukomar.prof@gmail.com">farukomar.prof@gmail.com</a></p>
          <p className='my-1'>Phone: <a href="tel:+8801881256305">01881256305</a></p>
          <p>Address: 123 Freelance St, Remote City</p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><a className="link link-hover" href="#">Terms & Conditions</a></li>
            <li><a className="link link-hover" href="#">Privacy Policy</a></li>
            <li><a className="link link-hover" href="#">Help & Support</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.facebook.com/omarfaruk56305" className="hover:text-primary"><FaFacebookF /></a>
            <a href="https://x.com/omarfaruk56305" className="hover:text-primary"><FaTwitter /></a>
            <a href="https://www.instagram.com/omarfaruk56305" className="hover:text-primary"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/omarfaruk56305" className="hover:text-primary"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TaskHive. All rights reserved.
      </div>
    </footer>
  );
}
