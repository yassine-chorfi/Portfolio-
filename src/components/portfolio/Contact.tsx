import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80, "Name too long"),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(5, "Message is too short").max(1000, "Message too long"),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Invalid input",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you shortly.",
      });
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-2 space-y-6">
            <div className="card-gradient border border-border rounded-2xl p-6">
              <Mail className="text-primary mb-3" />
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium">hello@yassinechorfi.dev</div>
            </div>
            <div className="card-gradient border border-border rounded-2xl p-6">
              <MapPin className="text-primary mb-3" />
              <div className="text-sm text-muted-foreground">Location</div>
              <div className="font-medium">Morocco · Working worldwide</div>
            </div>
            <div className="card-gradient border border-border rounded-2xl p-6">
              <div className="text-sm text-muted-foreground mb-3">Follow me</div>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Instagram, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-3 card-gradient border border-border rounded-2xl p-8 space-y-5">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={160}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};