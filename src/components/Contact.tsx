const Contact: React.FC = () => {
  return (
    <div className="mt-[150px] text-center" id="contact" data-aos="zoom-in-up">
      <a
        href="mailto:hnboyano@gmail.com"
        id="contact-mail"
        className="py-[25px] px-[35px] sm:px-[50px] rounded-[10px] shadow-xl text-[1.5rem] no-underline text-center bg-secondaryColor transition-all duration-300 ease-in-out hover:text-[hoverColor]"
        aria-label="Wadev email">
        Contact me!
      </a>
    </div>
  )
}

export default Contact
