"use client"
import { useState } from "react"
import { MessageCircle, ThumbsUp, Eye, Clock, Pin, Flame, TrendingUp, Search, Filter, Plus } from "lucide-react"

interface ForumPost {
  id: number
  title: string
  content: string
  author: {
    name: string
    avatar: string
    badge: string
    level: number
  }
  category: string
  replies: number
  likes: number
  views: number
  timeAgo: string
  isPinned: boolean
  isHot: boolean
  tags: string[]
}

const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: "Tips Mengurangi Sampah Plastik di Rumah - Pengalaman 6 Bulan",
    content:
      "Halo teman-teman! Mau share pengalaman aku selama 6 bulan terakhir mengurangi sampah plastik di rumah. Awalnya susah banget, tapi sekarang udah jadi kebiasaan...",
    author: {
      name: "Sarah Eco",
      avatar: "https://i.pravatar.cc/150?img=1",
      badge: "Eco Warrior",
      level: 15,
    },
    category: "Tips & Trik",
    replies: 47,
    likes: 156,
    views: 892,
    timeAgo: "2 jam lalu",
    isPinned: true,
    isHot: true,
    tags: ["plastik", "zerowaste", "tips"],
  },
  {
    id: 2,
    title: "Hasil Challenge Zero Waste Week - Dokumentasi Lengkap",
    content:
      "Guys, aku berhasil menyelesaikan Zero Waste Week Challenge! Mau share dokumentasi lengkap dan pembelajaran yang aku dapat...",
    author: {
      name: "Budi Green",
      avatar: "https://i.pravatar.cc/150?img=3",
      badge: "Green Champion",
      level: 12,
    },
    category: "Challenge",
    replies: 23,
    likes: 89,
    views: 445,
    timeAgo: "5 jam lalu",
    isPinned: false,
    isHot: true,
    tags: ["challenge", "zerowaste", "dokumentasi"],
  },
  {
    id: 3,
    title: "Cara Membuat Kompos dari Sampah Dapur - Tutorial Lengkap",
    content: "Tutorial step-by-step membuat kompos dari sampah dapur. Mudah banget dan hasilnya bagus untuk tanaman!",
    author: {
      name: "Rina Hijau",
      avatar: "https://i.pravatar.cc/150?img=9",
      badge: "Compost Master",
      level: 18,
    },
    category: "Tutorial",
    replies: 34,
    likes: 127,
    views: 678,
    timeAgo: "1 hari lalu",
    isPinned: false,
    isHot: false,
    tags: ["kompos", "tutorial", "organik"],
  },
  {
    id: 4,
    title: "Diskusi: Bank Sampah di Daerah Kalian Gimana?",
    content: "Pengen tau kondisi bank sampah di daerah kalian. Di tempatku masih kurang sosialisasi nih...",
    author: {
      name: "Andi Peduli",
      avatar: "https://i.pravatar.cc/150?img=7",
      badge: "Community Helper",
      level: 8,
    },
    category: "Diskusi",
    replies: 67,
    likes: 45,
    views: 234,
    timeAgo: "2 hari lalu",
    isPinned: false,
    isHot: false,
    tags: ["banksampah", "diskusi", "komunitas"],
  },
]

const categories = [
  { name: "Semua", count: 156, color: "blue" },
  { name: "Tips & Trik", count: 45, color: "green" },
  { name: "Tutorial", count: 32, color: "purple" },
  { name: "Challenge", count: 28, color: "orange" },
  { name: "Diskusi", count: 51, color: "indigo" },
]

export default function CommunityForum() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "trending">("latest")

  const getBadgeColor = (badge: string) => {
    const colors = {
      "Eco Warrior": "bg-green-100 text-green-700 border-green-200",
      "Green Champion": "bg-blue-100 text-blue-700 border-blue-200",
      "Compost Master": "bg-yellow-100 text-yellow-700 border-yellow-200",
      "Community Helper": "bg-purple-100 text-purple-700 border-purple-200",
    }
    return colors[badge as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Tips & Trik": "bg-green-100 text-green-700 border-green-200",
      Tutorial: "bg-purple-100 text-purple-700 border-purple-200",
      Challenge: "bg-orange-100 text-orange-700 border-orange-200",
      Diskusi: "bg-indigo-100 text-indigo-700 border-indigo-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-700 font-medium text-sm">Community Forum</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Forum <span className="text-blue-600">Komunitas</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Tempat berbagi pengalaman, tips, dan diskusi seputar gaya hidup ramah lingkungan. Mari saling belajar dan
            menginspirasi!
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari topik..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                <span>Buat Post Baru</span>
              </button>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Kategori
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      activeCategory === category.name ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 border border-blue-200">
              <h3 className="font-bold text-gray-800 mb-4">Statistik Forum</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Post</span>
                  <span className="font-bold text-gray-800">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Member Aktif</span>
                  <span className="font-bold text-gray-800">892</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Post Hari Ini</span>
                  <span className="font-bold text-gray-800">23</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex gap-2">
                {[
                  { id: "latest", label: "Terbaru", icon: Clock },
                  { id: "popular", label: "Populer", icon: ThumbsUp },
                  { id: "trending", label: "Trending", icon: TrendingUp },
                ].map((sort) => {
                  const Icon = sort.icon
                  return (
                    <button
                      key={sort.id}
                      onClick={() => setSortBy(sort.id as any)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        sortBy === sort.id
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{sort.label}</span>
                    </button>
                  )
                })}
              </div>

              <div className="text-sm text-gray-600">Menampilkan {forumPosts.length} dari 156 post</div>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {forumPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  {/* Post Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-800">{post.author.name}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${getBadgeColor(post.author.badge)}`}
                        >
                          {post.author.badge}
                        </span>
                        <span className="text-xs text-gray-500">Level {post.author.level}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{post.timeAgo}</span>
                        <span>•</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {post.isPinned && <Pin className="w-4 h-4 text-blue-500" />}
                      {post.isHot && <Flame className="w-4 h-4 text-orange-500" />}
                    </div>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Post Content Preview */}
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1 text-gray-500">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.replies}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{post.views}</span>
                      </div>
                    </div>

                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                      Baca Selengkapnya →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                Muat Lebih Banyak
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
