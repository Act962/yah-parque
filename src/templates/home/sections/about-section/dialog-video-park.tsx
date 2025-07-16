import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface DialogVideoPark {
  children: React.ReactNode;
}

export function DialogVideoPark({ children }: DialogVideoPark) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className=" h-72 sm:h-[360px] md:h-[500px] p-4 overflow-hidden border-none !max-w-6xl">
        <iframe
          width="100%"
          height="100%"
          className="rounded-lg"
          src="https://www.youtube.com/embed/d5LPXod99EI?si=pbn79w2sHc-AluIu&autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
