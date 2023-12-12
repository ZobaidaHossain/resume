

const Education = () => {
    return (
        <section className="text-white bg-black" id="education">
          
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
      <h2 className="text-6xl font-bold text-white mb-4 ml-11">My Education</h2>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <ul className="list-disc pl-2">
            <li>SSC:  Noakhali Govt. Girls High School  (GPA:4.77)</li>
            <li>HSC:  Cambrian College  (GPA:4.42)</li>
            <li>B.Sc: Daffodil International University  (CGPA:3.80)</li>
          </ul>
      </div>
      </div>
    </section>
    );
};

export default Education;