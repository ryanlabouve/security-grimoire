interface Domain {
  label: string;
  path: string;
  domains: Domain[];
}
const domains: Domain[] = [
  {
    label: "Server-side",
    path: "./",
    domains: [],
  },
];

export default domains;
