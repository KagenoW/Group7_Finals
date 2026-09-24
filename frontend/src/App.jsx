import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  Search,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  GraduationCap,
  LockKeyhole,
  KeyRound,
  Zap,
  Clock3,
  Atom,
} from "lucide-react";

import Navbar from "./components/Navbar";

import StudentCollab from "./assets/StudentCollab.png";
import StudentCampus from "./assets/StudentCampus.png";
import Studcamp from "./assets/Studcamp.png";
import Hacker from "./assets/Hacker.png";
import Moa from "./assets/Moa.png";

import Activity1 from "./pages/Activity1";
import Activity2 from "./pages/Activity2";
import Activity3 from "./pages/Activity3";
import Activity4 from "./pages/Activity4";
import Activity5 from "./pages/Activity5";

function Home() {
  const carouselImages = [
    {
      src: Moa,
      alt: "Students",
    },
    {
      src: Studcamp,
      alt: "Students collaborating",
    },
    {
      src: StudentCampus,
      alt: "Students on campus",
    },
    {
      src: StudentCollab,
      alt: "Students working together",
    },
    {
      src: Hacker,
      alt: "Student programming",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) => {
        return (previousImage + 1) % carouselImages.length;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const previousImage = () => {
    setCurrentImage((current) => {
      return (
        (current - 1 + carouselImages.length) %
        carouselImages.length
      );
    });
  };

  const nextImage = () => {
    setCurrentImage((current) => {
      return (current + 1) % carouselImages.length;
    });
  };

  const activities = [
    {
      number: 1,
      icon: LockKeyhole,
      title: "Login Authentication",
      description:
        "Validate a username and password against sample credentials and manage login/logout state.",
      path: "/activity1",
    },
    {
      number: 2,
      icon: GraduationCap,
      title: "Student Grade Evaluation",
      description:
        "Enter a student's score and get an automatic remark based on grade ranges.",
      path: "/activity2",
    },
    {
      number: 3,
      icon: KeyRound,
      title: "Password Strength Checker",
      description:
        "Check password length and receive live feedback on how strong it is.",
      path: "/activity3",
    },
    {
      number: 4,
      icon: Zap,
      title: "Electricity Bill Calculator",
      description:
        "Calculate a customer's electricity bill based on kWh consumption and tiered rates.",
      path: "/activity4",
    },
    {
      number: 5,
      icon: Clock3,
      title: "Employee Attendance Checker",
      description:
        "Check an employee's time-in and determine whether they are on time, late, or very late.",
      path: "/activity5",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#f4f7fc]">
      <div className="w-full overflow-hidden bg-white shadow-xl">

        {/* HERO */}
        <section className="relative mx-3 mt-3 overflow-hidden rounded-[28px] md:mx-5 lg:mx-7">

          <img
            src={StudentCampus}
            alt="Students"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#001f5b]/85 via-[#003b7a]/70 to-[#0057a8]/55" />

          <div className="relative flex min-h-[520px] items-center px-8 py-20 md:px-16 lg:px-24 xl:px-32">

            <div className="max-w-4xl text-white">

              {/* STUDENT PORTAL BADGE */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f5c400] px-5 py-2.5 text-sm font-bold text-[#001f5b] shadow-lg">
                <GraduationCap size={18} strokeWidth={2.5} />
                <span>Student Portal</span>
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
                Learn.
                <br />
                Practice.
                <br />
                Build Your Skills.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                Welcome to your React Activity Student Portal. Access your
                programming activities, practice your skills, and explore
                interactive exercises in one convenient place.
              </p>

              <a
                href="#activities"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#f5c400] px-8 py-4 text-sm font-extrabold text-[#001f5b] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffd52e] hover:shadow-xl"
              >
                <span>Explore Activities</span>
                <ArrowRight size={18} />
              </a>

            </div>
          </div>
        </section>

        {/* SEARCH */}
        <div className="relative z-10 mx-4 -mt-8 md:mx-10 lg:mx-16 xl:mx-24">

          <div className="flex w-full flex-col gap-3 rounded-full border border-slate-200 bg-white p-2 shadow-xl md:flex-row md:items-center">

            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-[#f4f7fc] px-6 py-4">

              <Search
                size={20}
                strokeWidth={2.2}
                className="shrink-0 text-[#003b7a]"
              />

              <input
                type="text"
                placeholder="Search activities..."
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

            </div>

            <div className="hidden items-center gap-2 px-5 text-sm text-slate-500 lg:flex">
              <BookOpen
                size={17}
                strokeWidth={2}
                className="text-[#003b7a]"
              />
              <span>5 Activities</span>
            </div>

            <a
              href="#activities"
              className="flex items-center justify-center gap-2 rounded-full bg-[#003b7a] px-8 py-4 text-center text-sm font-bold text-white transition hover:bg-[#002b5c]"
            >
              <span>View Activities</span>
              <ArrowRight size={17} />
            </a>

          </div>
        </div>

        {/* WELCOME + CAROUSEL */}
        <section className="grid w-full grid-cols-1 items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:px-16 xl:px-24 2xl:px-32">

          {/* CAROUSEL */}
          <div className="group relative">

            <div className="relative h-[320px] overflow-hidden rounded-[28px] shadow-lg md:h-[420px] lg:h-[480px]">

              {carouselImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`
                    absolute inset-0 h-full w-full object-cover
                    transition-opacity duration-1000 ease-in-out
                    ${
                      currentImage === index
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#001f5b]/50 via-transparent to-transparent" />

              {/* PREVIOUS BUTTON */}
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#003b7a] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white group-hover:opacity-100"
              >
                <ArrowLeft size={20} strokeWidth={2.5} />
              </button>

              {/* NEXT BUTTON */}
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#003b7a] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white group-hover:opacity-100"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>

              {/* DOTS */}
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">

                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`
                      h-2.5 rounded-full transition-all duration-300
                      ${
                        currentImage === index
                          ? "w-8 bg-[#f5c400]"
                          : "w-2.5 bg-white/70 hover:bg-white"
                      }
                    `}
                  />
                ))}

              </div>

            </div>

            {/* FLOATING LABEL */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-2 rounded-full border-4 border-white bg-[#003b7a] px-6 py-3 text-sm font-bold text-white shadow-lg">
              <GraduationCap size={18} strokeWidth={2.3} />
              <span>Student Life</span>
            </div>

          </div>

          {/* TEXT */}
          <div className="max-w-3xl">

            <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-[#003b7a]">
              <BookOpen size={17} strokeWidth={2.4} />
              <span>Student Dashboard</span>
            </p>

            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[#001f5b] md:text-5xl xl:text-6xl">
              Welcome to Your
              <br />
              Activity Portal
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
              Improve your programming skills through a collection of
              interactive activities. Each activity focuses on a different
              programming concept and provides a practical way to apply what
              you have learned.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="#activities"
                className="flex items-center gap-2 rounded-full bg-[#003b7a] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#002b5c]"
              >
                <span>View Activities</span>
                <ArrowRight size={17} />
              </a>

              <Link
                to="/activity1"
                className="flex items-center gap-2 rounded-full border border-[#d9e2f0] bg-white px-7 py-3.5 text-sm font-bold text-[#003b7a] transition hover:border-[#003b7a] hover:bg-[#f4f7fc]"
              >
                <span>Start Activity 1</span>
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>
        </section>

        {/* ACTIVITIES */}
        <section
          id="activities"
          className="w-full bg-[#f4f7fc] px-6 py-20 md:px-10 lg:px-16 xl:px-20"
        >

          <div className="text-center">

            <p className="flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-widest text-[#003b7a]">
              <BookOpen size={17} strokeWidth={2.4} />
              <span>Quick Access</span>
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-[#001f5b] md:text-5xl">
              Explore Your Activities
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
              Choose an activity below to start practicing and demonstrate
              your programming skills.
            </p>

          </div>

          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">

            {activities.map((activity) => {
              const ActivityIcon = activity.icon;

              return (
                <Link
                  key={activity.number}
                  to={activity.path}
                  className="group flex min-h-[290px] flex-col rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#003b7a]/30 hover:shadow-xl"
                >

                  <div className="flex items-center justify-between">

                    {/* NUMBER */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7eef8] text-sm font-extrabold text-[#003b7a]">
                      {activity.number}
                    </div>

                    {/* ICON */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8f3d8] text-[#003b7a] transition group-hover:scale-110">
                      <ActivityIcon
                        size={27}
                        strokeWidth={2.1}
                      />
                    </div>

                  </div>

                  <h3 className="mt-7 text-xl font-extrabold leading-tight text-[#001f5b]">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {activity.description}
                  </p>

                  <div className="mt-auto pt-7">

                    <div className="flex items-center justify-between rounded-full bg-[#003b7a] px-5 py-3.5 text-sm font-bold text-white transition group-hover:bg-[#002b5c]">

                      <span>Open Activity</span>

                      <ArrowRight
                        size={18}
                        strokeWidth={2.4}
                        className="transition-transform group-hover:translate-x-1"
                      />

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

          <div className="mt-10 flex justify-center gap-2">
            <span className="h-2 w-8 rounded-full bg-[#003b7a]" />
            <span className="h-2 w-2 rounded-full bg-[#c8d5e6]" />
            <span className="h-2 w-2 rounded-full bg-[#c8d5e6]" />
          </div>

        </section>

        {/* STATS */}
        <section className="w-full px-6 py-16 md:px-10 lg:px-16 xl:px-20">

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

            <div className="rounded-2xl bg-[#f4f7fc] p-7 text-center transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-4xl font-extrabold text-[#003b7a]">
                5
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Activities
              </p>
            </div>

            <div className="rounded-2xl bg-[#f4f7fc] p-7 text-center transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-4xl font-extrabold text-[#003b7a]">
                5
              </p>
              <p className="mt-2 text-sm text-slate-500">
                React Pages
              </p>
            </div>

            <div className="rounded-2xl bg-[#f4f7fc] p-7 text-center transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-4xl font-extrabold text-[#003b7a]">
                100%
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Interactive
              </p>
            </div>

            <div className="rounded-2xl bg-[#f4f7fc] p-7 text-center transition hover:-translate-y-1 hover:shadow-md">

              <p className="flex justify-center text-4xl font-extrabold text-[#003b7a]">
                <Atom size={40} strokeWidth={2.1} />
              </p>

              <p className="mt-2 text-sm text-slate-500">
                React Powered
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen w-full bg-[#f4f7fc]">

        <Navbar />

        <main className="w-full">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/activity1"
              element={<Activity1 />}
            />

            <Route
              path="/activity2"
              element={<Activity2 />}
            />

            <Route
              path="/activity3"
              element={<Activity3 />}
            />

            <Route
              path="/activity4"
              element={<Activity4 />}
            />

            <Route
              path="/activity5"
              element={<Activity5 />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;