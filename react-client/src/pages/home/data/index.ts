import { News, Social } from "~/pages/home/types";

export const bio =
  "株式会社ハックツ: エンジニア\nPHP, Laravel, AWSなどを使っています";

export const socialList: Social[] = [
  {
    name: "X",
    iconPath: "/images/logos/x.png",
    domain: "x.com",
    profileUrl: "https://x.com/take_cantik",
  },
  {
    name: "GitHub",
    iconPath: "/images/logos/github.png",
    domain: "github.com",
    profileUrl: "https://github.com/take-cantik",
  },
  {
    name: "Topa'z",
    iconPath: "/images/logos/topaz.png",
    domain: "topaz.dev",
    profileUrl: "https://topaz.dev/take_cantik",
  },
  {
    name: "note",
    iconPath: "/images/logos/note.png",
    domain: "note.com",
    profileUrl: "https://note.com/take_cantik",
  },
  {
    name: "Facebook",
    iconPath: "/images/logos/facebook.png",
    domain: "facebook.com",
    profileUrl: "https://www.facebook.com/take.cantik",
  },
];

export const newsList: News[] = [
  {
    date: "2023-10-28",
    content: "🚀 v1.0.0",
  },
  {
    date: "2023-10-26",
    content: "これ作り始めました",
  },
];
