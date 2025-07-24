"use client";
import { useState } from "react";
import type React from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Users,
  BookOpen,
  Star,
  CheckCircle,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ContactForm {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

const supportCategories = [
  {
    id: "learning",
    title: "Bantuan Belajar",
    description: "Pertanyaan seputar materi pembelajaran",
    icon: BookOpen,
    color: "yellow",
  },
  {
    id: "community",
    title: "Komunitas",
    description: "Bergabung atau masalah komunitas",
    icon: Users,
    color: "yellow",
  },
  {
    id: "feedback",
    title: "Saran & Masukan",
    description: "Ide untuk pengembangan platform",
    icon: Star,
    color: "purple",
  },
  {
    id: "technical",
    title: "Masalah Teknis",
    description: "Bug atau error pada website",
    icon: MessageCircle,
    color: "red",
  },
];

const faqData = [
  {
    question: "Bagaimana cara bergabung dengan komunitas Sampedia?",
    answer:
      "Kamu bisa bergabung dengan komunitas Sampedia secara gratis melalui halaman Komunitas. Cukup daftar dengan email dan mulai berpartisipasi dalam diskusi dan tantangan.",
  },
  {
    question: "Apakah semua materi pembelajaran gratis?",
    answer:
      "Ya! Semua materi pembelajaran di Sampedia tersedia gratis untuk semua pengguna. Kami berkomitmen untuk memberikan edukasi lingkungan yang dapat diakses oleh siapa saja.",
  },
  {
    question: "Bagaimana sistem poin dan badge bekerja?",
    answer:
      "Kamu mendapatkan poin dengan menyelesaikan quiz, tantangan komunitas, dan berpartisipasi aktif. Badge diberikan sebagai pencapaian khusus untuk aktivitas tertentu.",
  },
  {
    question: "Bisakah saya berkontribusi membuat konten?",
    answer:
      "Tentu saja! Kami sangat terbuka untuk kontribusi dari komunitas. Kamu bisa mengirimkan ide, artikel, atau solusi kreatif melalui form kontak ini.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        category: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      yellow: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
        border: "border-yellow-200",
        button: "bg-yellow-500",
      },

      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        button: "bg-purple-500",
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200",
        button: "bg-red-500",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.yellow;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
        {/* Header */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-5 h-5 text-red-600 animate-pulse" />
              <span className="text-red-700 font-medium text-sm">
                Hubungi Kami
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Ada <span className="text-red-600">Pertanyaan</span>?
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tim Sampedia siap membantu! Hubungi kami untuk pertanyaan, saran,
              atau bantuan apapun.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info & Support Categories */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Informasi Kontak
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600 text-sm">
                        hello@sampedia.id
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Telepon</div>
                      <div className="text-gray-600 text-sm">
                        +62 21 1234 5678
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Alamat</div>
                      <div className="text-gray-600 text-sm">
                        Surakarta, Indonesia
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Categories */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Kategori Bantuan
                </h3>

                <div className="space-y-3">
                  {supportCategories.map((category) => {
                    const Icon = category.icon;
                    const colors = getColorClasses(category.color);

                    return (
                      <div
                        key={category.id}
                        className={`${colors.bg} border ${colors.border} rounded-xl p-4 cursor-pointer hover:shadow-md transition-all duration-300`}
                        onClick={() =>
                          setFormData({ ...formData, category: category.id })
                        }
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 ${colors.button} rounded-full flex items-center justify-center`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 text-sm">
                              {category.title}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {category.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-red-100 to-yellow-100 border border-red-200 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Waktu Respon</div>
                    <div className="text-red-600 text-sm font-medium">
                      Maksimal 24 jam
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Kami berkomitmen untuk merespon setiap pertanyaan dalam waktu
                  maksimal 24 jam pada hari kerja.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Pesan Terkirim! 🎉
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Terima kasih atas pesanmu. Tim kami akan segera merespon
                      dalam waktu maksimal 24 jam.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      <span className="text-red-700 font-medium text-sm">
                        Pesan berhasil dikirim
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Kirim Pesan
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                            placeholder="Masukkan nama lengkap"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                            placeholder="nama@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Kategori *
                          </label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Pilih kategori</option>
                            {supportCategories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subjek *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                            placeholder="Ringkasan singkat pertanyaan"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pesan *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Jelaskan pertanyaan atau masalah yang ingin kamu sampaikan..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-4 px-6 rounded-xl font-medium hover:from-red-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Kirim Pesan
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                <HelpCircle className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-700 font-medium text-sm">FAQ</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Pertanyaan yang Sering Ditanyakan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Temukan jawaban untuk pertanyaan umum seputar Sampedia
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
