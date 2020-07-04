---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
Hello! My name is Jay Patrikar. I am a PhD student in the [Robotics Institute](https://www.ri.cmu.edu/) at [Carnegie Mellon University](https://www.cmu.edu/) advised by [Dr Sebastian Scherer](https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/). I am part of the [AirLab](http://theairlab.org/) and the [Field Robotics Center](https://frc.ri.cmu.edu/).

My research lies at the intersection of Artificial Intelligence, Field Robotics and Aerospace Engineering. Previously, I have completed my Master of Science in Robotics (MSR) at Carnegie Mellon University (CMU). Before CMU, I completed my Masters and Bachelor of Technology in Engineering from the [Department of Aerospace Engineering](https://www.iitk.ac.in/aero/) at the Indian Institute of Technology Kanpur where I was advised by [Dr Mangal Kothari](https://www.iitk.ac.in/aero/mangal/) in the [Intelligent Guidance and Control Laboratory](https://www.iitk.ac.in/aero/mangal/). 
<!-- My current research efforts are focused on developing tools and algorithms that enable safe operations of mobile robots in critical environments without sacrificing performance.  -->



I am passionate about aviation. I currently hold a FAA Part 107 Remote Pilot License and a FAA Part 61 Student Pilot License.  



Here is my [Curriculum Vitae](./files/cv.pdf).

<!-- ![haha](./images/CNN1.png){:width="250px"}
![haha](./images/CNN1.png){:width="250px"}
![haha](./images/CNN1.png){:width="250px"} -->


<!-- ## News

| 2020   | Our wind-aware path planning in urban areas paper got accepted in [ICUAS 2020](http://www.uasconferences.com/)  |
|2020 |  Started the Part 61 Private Pilot Training |
| 2020 | Got accepted in the Robotics PhD program at RI, CMU |
| 2019  | FAA Part 107 Remote Pilot License                           |
| 2019 | NSGL work was accepted as a journal paper in ASME |
| 2018   | Started the Master of Science in Robotics program at the Robotics Institute, CMU                         |
| 2018 | Met [Nihar Pathak](https://www.niharpathak.com) | 
| 2018   | Graduated with a Masters and Bachelors in Aerospace Engineering from IITK                          | -->

# Publications

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}