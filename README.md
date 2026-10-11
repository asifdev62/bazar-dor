# 🛒 বাজার দর (Bazar Dor)

### বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজারদর

**Bazar Dor** is a modern, responsive web application that helps users explore the prices of everyday essential products in Bangladesh. Users can check product prices, compare price changes, browse products by category, and stay informed about market trends through a clean and user-friendly interface.

🌐 **Live Website:** https://bazar-dor-psi-olive.vercel.app/

---

## ✨ Features

- 🏠 **Modern Homepage** — Clean and user-friendly interface.
- 📈 **Price Increase Tracking** — Explore products whose prices have increased.
- 📉 **Price Decrease Tracking** — Find products whose prices have decreased.
- 🛍️ **All Products** — Browse available essential products in one place.
- 🗂️ **Category-Based Navigation** — Explore products by categories such as rice, lentils, oil, vegetables, fish, meat, and eggs.
- 🔍 **Product Details** — View individual product information and price history.
- 📊 **Price Comparison** — Compare today's prices with previous prices.
- 🔄 **Market Trend Indicators** — Understand price movements using percentage changes and visual indicators.
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- ⚡ **Optimized Performance** — Built with Next.js for a modern web experience.
- 🇧🇩 **Bangla Interface** — Designed for Bengali-speaking users.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework |
| React | User interface |
| TypeScript | Type safety |
| Tailwind CSS | Styling and responsive design |
| React Icons | Icons |
| REST API | Product and category data |
| Vercel | Deployment |

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/asifdev62/bazar-dor.git
```

### 2. Navigate to the Project Folder

```bash
cd bazar-dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Your Browser

Visit:

```text
http://localhost:3000
```

## 📁 Project Structure

```text
src/app/
├── api/auth/[...all]/route.tsx
├── category/[slug]/page.tsx
├── components/
│   ├── products/ (AllProduct, priceDownPro..., PriceUpProduc...)
│   ├── userProfile/page.tsx      
│   ├── BanglaDate.tsx, Banner.tsx, Footer.tsx
│   ├── Header.tsx, Marque.tsx, Navbar.tsx, UserInfo.tsx
├── product/[slug]/page.tsx
├── products/page.tsx
├── signIn/page.tsx
├── signUp/page.tsx
├── favicon.ico, globals.css, layout.tsx ...
```

*Note: This is an illustrative project structure. Adjust it to match the actual files and folders in your repository.*

## 🔌 API Integration

The application uses REST APIs to retrieve product and category information.

**Categories API**

```text
https://api.abcz.workers.dev/api/bazardor/categories
```

**Products API**

```text
https://api.abcz.workers.dev/api/bazardor/products
```

The API provides information used to display product names, categories, units, current prices, historical prices, and price changes.

## 📱 Responsive Design

Bazar Dor is designed to provide a consistent experience across different screen sizes:

- 📱 Mobile phones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop computers

## 🔮 Future Improvements

- 🔎 Search products by name.
- ↕️ Sort products by price and category.
- 📍 Show market-specific prices and locations.
- 📈 Add interactive price history charts.
- ⭐ Allow users to save favorite products.
- 🔔 Add notifications for significant price changes.
- 🗓️ Provide more historical price data.

## 👨‍💻 Developer

**Md Asif Ali**

Full-Stack Web Developer | BSc in Computer Science & Engineering

**Skills:** JavaScript · TypeScript · React · Next.js · Tailwind CSS

- GitHub: [@asifdev62](https://github.com/asifdev62)
- Live Project: [Bazar Dor](https://bazar-dor-psi-olive.vercel.app/)

---

⭐ If you find this project useful, consider giving it a star on GitHub!

**Bazar Dor — বাজারদর জানুন, সচেতনভাবে বাজার করুন।**
