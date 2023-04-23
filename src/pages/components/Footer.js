import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/imprint"}>Imprint (Impressum)</Link>
        <Link href={"/data-privacy"}>Data Privacy (Datenschutz)</Link>
      </div>
      <p>
        &copy; 2023{" "}
        <Link href={"https://github.com/Long-HaHoang"}>long ha hoang</Link>
      </p>
    </footer>
  );
}
