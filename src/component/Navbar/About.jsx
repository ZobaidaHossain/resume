import img from '../../assets/cc.jpeg'

const About = () => {
    return (
        <section className="text-white bg-black"id="about" >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={img} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
           
Hello! I`m Zobaida Hossain, and I proudly embrace the Protagonist personality type. Ever driven to right unjust wrongs and passionate about continuous improvement, I find a unique sense of belonging in making a positive impact. I often feel a strong need to belong, and my journey involves a constant quest for transformation, as shared by individuals with this personality type. Recognizing the power of self-improvement, I strive to advance and positively influence the world, echoing the sentiments of Protagonists. Join me on this journey of meaningful insights and personal growth ,there`s always room for more positive change!
          </p>  
          
        </div>
      </div>
    </section>
    );
};

export default About;