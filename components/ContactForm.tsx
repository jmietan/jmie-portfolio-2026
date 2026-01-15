"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  function generateCaptcha() {
    const x = Math.floor(Math.random() * 8) + 1;
    const y = Math.floor(Math.random() * 8) + 1;
    setA(x);
    setB(y);
    setAnswer("");
  }

  function validateEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (parseInt(answer || "", 10) !== a + b) {
      setError("Captcha answer is incorrect.");
      return;
    }

    // For now, just simulate submit success
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    generateCaptcha();
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 p-6">
        <h3 className="text-lg font-semibold">Message sent</h3>
        <p className="mt-2 text-neutral-700">Thanks — I received your message and will get back to you shortly.</p>
        <button
          className="mt-4 inline-block text-sm text-blue-600 hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {error && <p role="alert" className="mb-4 rounded bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      <label className="block mb-3">
        <span className="text-sm font-medium text-neutral-700">Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-neutral-700">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-neutral-700">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm"
          rows={6}
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm font-medium text-neutral-700">Captcha — what is {a} + {b} ?</span>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="mt-1 w-32 rounded border border-neutral-200 bg-white px-3 py-2 text-sm"
          required
          inputMode="numeric"
        />
        <button type="button" onClick={generateCaptcha} className="ml-3 text-sm text-neutral-600 hover:underline">Refresh</button>
      </label>

      <div>
        <button className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:opacity-95" type="submit">Send message</button>
      </div>
    </form>
  );
}
