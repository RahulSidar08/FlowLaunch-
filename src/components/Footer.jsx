import { profile } from "@/lib/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12 w-full">
      <div className="px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-xl">{profile.name}</h3>
            <p className="text-muted-foreground">{profile.title}</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}