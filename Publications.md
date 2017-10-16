---
layout: page
title: Publications
author: Shaurya
---
## This covers work done at DANSER Lab and at NASA ARC (Ames Research Center). All of this information is public. Private projects are not listed.

---
### **1. [Tensegrity Heat Shield For Atmospheric Entry Through Celestial Bodies](https://users.soe.ucsc.edu/~slessard/papers/tensegrity-heat-shield.pdf)**
#### **Shaurya Chopra**, Mircea Teodorescu, Steven Lessard, Vytas SunSpiral, Adrian Agogino.
#### In Proceedings of ASME 2016 International Design Engineering Technical Conferences & Computers and Information in Engineering Conference (IDETC/CIE 2016), August 21-August 24, 2016, Charlotte, NC, USA
---
**Abstract**: Heat shields play a vital role in protecting space vehicles
during the atmosphere reentry. Therefore, they are essential for
space vehicles, and better designed heat shields will vastly improve
the ability both of robots and humans to explore extraterrestrial
destinations. The main goal of the current paper is to
investigate the feasibility of designing, building and deploying a
tensegrity-based heat shield, which would withstand the atmospheric
reentry of a low gravity and dense atmosphere celestial
body (such as Titan), where the reentry accelerations and therefore,
drag forces, will be lower than in the case of a high gravity
planet (e.g., Earth or Mars). The paper is a preliminary study,
which investigates the parameters that would be helpful in designing
tensegrity-based heat shields. We explore the dynamics
of entry and how the atmospheric forces interact with the heat
shield. Tensegrity structures consist of tension elements used
in conjunction with rigid rods which are actuated by changing
the lengths of the tension elements. The advantage of the proposed
approach versus the traditional one (rigid heat shields)
is that tensegrity structures are flexible structures able to adapt
the shape to obtain an optimal reentry configuration. The proposed
heat shield will be able to fold in a small space during
transport (e.g., to the target celestial body), unfold when the target
is reached and provide additional mobility for an optimal
reentry pattern. However, to achieve a deployable configuration,
the tensegrity structure must withstand significant dynamics and
thermal loads. We will use NASA Tensegrity Robotics Toolkit
(NTRT) to simulate the structural designs of the heat shield as
well as for designing the controllers.

---

### **2.  [A bio-inspired tensegrity manipulator with multi-DOF, structurally compliant joints](https://arxiv.org/pdf/1604.08667.pdf)**
#### Steven Lessard, Dennis Castro, William Asper, **Shaurya Chopra**, Leya Breanna Baltaxe-Admony, Mircea Teodorescu, Vytas SunSpiral, Adrian Agogino
#### In the Proceedings of the International Conference on Intelligent Robots and Systems (IROS), Daejeon, Korea, October 2016
---
**Abstract**: Most traditional robotic mechanisms feature inelastic joints that are unable to robustly handle large deformations and off-axis moments. As a result, the applied loads are transferred rigidly throughout the entire structure. The disadvantage of this approach is that the exerted leverage is magnified at each subsequent joint possibly damaging the mechanism. In this paper, we present two lightweight, elastic, bio-inspired tensegrity robotic arms adapted from prior static models which mitigate this danger while improving their mechanism's functionality. Our solutions feature modular tensegrity structures that function similarly to the human elbow and the human shoulder when connected. Like their biological counterparts, the proposed robotic joints are flexible and comply with unanticipated forces. Both proposed structures have multiple passive degrees of freedom and four active degrees of freedom (two from the shoulder and two from the elbow). The structural advantages demonstrated by the joints in these manipulators illustrate a solution to the fundamental issue of elegantly handling off-axis compliance. Additionally, this initial experiment illustrates that moving tensegrity arms must be designed with large reachable and dexterous workspaces in mind, a change from prior tensegrity arms which were only static. These initial experiments should be viewed as an exploration into the design space of active tensegrity structures, particularly those inspired by biological joints and limbs.

Selected figures from the study:

![Tensegrity Figure 1]({{ site.url }}/assets/tensegrity_arm_1.png)

---
### 3. **Journal Paper: Developing an Autonomous Unmanned Aerial System to Estimate Field Terrain Corrections for Gravity Measurements [Published in [Leading Edge](http://seg.org/Publications/The-Leading-Edge)]**
#### Leon Kaub, Christopher Seruge, Shauryadeep Chopra, Jonathan M.G. Glen, Mircea Teodorescu
---
**Abstract**: We have developed a method employing an autonomous Unmanned Aerial System (UAS) to provide a more robust measure of the Field Terrain Correction (FTC) for gravity measurements than is offered by traditional methods. The resolution of digital terrain that is typically available for much of the United States (10 or 30m) is too low to adequately estimate the FTC in steep terrain. Most often, the FTC, which corresponds to the innermost zone around the gravity station (e.g., extending to 68m radius for the Hayford-Bowie zones A&B), is estimated in the field with the aid of templates and charts that attempt to approximate sectors of the terrain as uniform slopes. The aforementioned techniques can result in significant error if they are not performed by experienced practitioners, particularly when the terrain is complex. In our approach, we dispatch a UAS to collect images around the gravity station, which we use to construct a Digital Elevation Model (DEM) of the area with the Structure from Motion (SfM) method. The resulting DEMs allow us to precisely calculate the FTC. We have developed software to automate most of the procedure including the autonomous flight and image capturing by the UAS. As part of our initial testing, we have experimented with a variety of flight paths, at several sites spanning a range of terrain conditions, to determine the most efficient flight characteristics for this application. Selecting field sites where existing LiDAR data were available, has enabled us to characterize errors in the DEMs derived from SfM and to assess the tradeoffs between flight time, processing time, and accuracy of the resulting FTCs. Our methodology is fast (flight time: 3-4 minutes, depending on weather conditions) and robust primarily because the UAS flight is automated. It can be used to calculate the FTC of a variety of terrain conditions and delivers results that are much more precise than existing methods that do not make use of high-resolution digital terrain data.
---
![Autonomous UAV w/ Control Points]({{ site.url }}/assets/usgs_journal.jpg)

