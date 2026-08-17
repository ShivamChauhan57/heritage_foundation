import therapy1 from "@/assets/gallery-therapy-1.jpg";
import therapy2 from "@/assets/gallery-therapy-2.jpg";
import lesson1 from "@/assets/gallery-lesson-1.jpg";
import lesson2 from "@/assets/gallery-lesson-2.jpg";
import trail1 from "@/assets/gallery-trail-1.jpg";
import trail2 from "@/assets/gallery-trail-2.jpg";
import horse1 from "@/assets/gallery-horse-1.jpg";
import horse2 from "@/assets/gallery-horse-2.jpg";

export const categories = ["All", "Therapy", "Lessons", "Trail Rides", "Our Horses"] as const;
export type Category = (typeof categories)[number];

export const photos: { src: string; alt: string; category: Exclude<Category, "All"> }[] = [
  { src: therapy1, alt: "A volunteer leads a smiling young rider on a gentle horse in the arena", category: "Therapy" },
  { src: therapy2, alt: "A rider using a wheelchair meets a calm horse at the accessible mounting ramp", category: "Therapy" },
  { src: lesson1, alt: "An instructor coaches a teen rider on posture in the sand arena", category: "Lessons" },
  { src: lesson2, alt: "A child grooms a horse with a brush in the barn aisle", category: "Lessons" },
  { src: trail1, alt: "Riders travel a shaded pine trail beside a creek", category: "Trail Rides" },
  { src: trail2, alt: "Two riders cross an open field at golden hour on an adventure ride", category: "Trail Rides" },
  { src: horse1, alt: "Close-up of a palomino horse in warm evening light", category: "Our Horses" },
  { src: horse2, alt: "Two horses graze near a weathered fence in front of the barn at sunset", category: "Our Horses" },
];
