import React from "react";
import Navbar from "../Navbar/Navbar";
import { useTheme } from "../Themecontext"; // Assuming Themecontext provides theme context
import Footer from "../footer/Footer";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";


const heartHealthyExercises = [
  {
    name: "Heart Healthy - 1 Mile Walk",
    description: "This 20-minute low-impact walking workout is designed to promote cardiovascular health and can be done at home.",
    videoLink: "https://www.youtube.com/watch?v=u08lo0bESJc",
    image:img1,
  },
  {
    name: "8 Exercises for Improving Heart Health",
    description: "This video demonstrates eight exercises aimed at enhancing cardiovascular health, particularly beneficial for seniors.",
    videoLink: "https://www.youtube.com/watch?v=KD2j72DhL8Y",
    image:img2,
  },
  {
    name: "Morning Routine for Heart Health",
    description: "Kickstart your day with a heart-healthy morning routine featuring stretching, deep breathing exercises, and a nutritious breakfast to support cardiovascular wellness.",
    videoLink: "https://youtu.be/PxExR7Yj5d4?feature=shared",
    image:img3,
  },
  {
    name: "Yoga for Heart Health",
    description: "Learn how specific yoga poses can enhance heart health by increasing flexibility, reducing stress, and improving blood flow.",
    videoLink: "https://youtu.be/lISRYHGrKtk?feature=shared",
    image:img4,
  },
  {
    name: "One Powerful Pranayama",
    description: "Learn how pranayama breathing techniques can improve heart health by reducing stress and enhancing circulation.",
    videoLink: "https://youtu.be/XWLjcwiayrE?feature=shared",
    image:img5,
  },
  {
    name: "Complete Core Strength Workout",
    description: "This 7-minute routine targets all core muscles, including abs, obliques, hips, glutes, and lower back, to enhance strength and stability.",
    videoLink: "https://youtu.be/_TdWdFQ1Cms?feature=shared",
    image:img6,
  }
];

const HeartHealthTips = () => {
  const { theme } = useTheme(); // Access the theme context

  return (
    <div className={`${theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-gray-900"}`}>
      <Navbar />
      <header className="p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Heart Health Tips</h1>
      </header>

      <main className="p-6">
        {/* Tips Section with Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Diet Section */}
          <div className="border p-4 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white">
            <h2 className="text-xl font-semibold mb-2">Healthy Diet</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Eat plenty of fruits and vegetables. <span className="text-sm">(Image placeholder)</span></li>
              <li>Include whole grains like oats, quinoa, and brown rice.</li>
              <li>Opt for lean proteins such as chicken, fish, and legumes.</li>
              <li>Incorporate heart-healthy fats like olive oil, nuts, and seeds.</li>
              <li>Limit processed foods and sugary snacks. <span className="text-sm">(Image placeholder)</span></li>
            </ul>
          </div>
   

          {/* Habits Section */}
          <div className="border p-4 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white">
            
            <h2 className="text-xl font-semibold mb-2">Healthy Habits</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Stay active with regular exercise (30 minutes daily).</li>
              <li>Maintain a consistent sleep schedule.</li>
              <li>Practice stress-relieving activities like yoga or meditation.</li>
              <li>Stay hydrated throughout the day.</li>
              <li>Schedule regular check-ups with your doctor. <span className="text-sm">(Image placeholder)</span></li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Avoid Section */}
          <div className="border p-4 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white">
            <h2 className="text-xl font-semibold mb-2">What to Avoid</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Avoid smoking and secondhand smoke exposure.</li>
              <li>Limit alcohol intake to moderate levels.</li>
              <li>Cut down on trans fats and high-sodium foods.</li>
              <li>Minimize stress-inducing environments. <span className="text-sm">(Image placeholder)</span></li>
              <li>Avoid sedentary behavior by taking breaks to move.</li>
            </ul>
          </div>

          {/* Additional Tips Section */}
          <div className="border p-4 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white">
            <h2 className="text-xl font-semibold mb-2">Additional Tips</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Monitor your blood pressure and cholesterol regularly.</li>
              <li>Maintain a healthy weight to reduce heart strain.</li>
              <li>Educate yourself about heart health and share awareness. <span className="text-sm">(Image placeholder)</span></li>
              <li>Take breaks to relax and unwind during busy days.</li>
              <li>Stay informed about your family history of heart disease.</li>
            </ul>
          </div>
        </section>
        <br/> <br/> 
        {/* Exercise Section */}
        <section className="mb-6">

          <h2 className="text-xl font-semibold mb-2">Heart Healthy Exercises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {heartHealthyExercises.map((exercise, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow hover:shadow-lg transition dark:bg-slate-800 dark:text-white"
              > 
              <img src={exercise.image} alt="sq"/>
                <h3 className="text-lg font-bold mb-2">{exercise.name}</h3>
                <p className="mb-4">{exercise.description}</p>
                <a
                  href={exercise.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Watch Video
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

        <Footer theme={theme} />
    </div>
  );
};

export default HeartHealthTips;
