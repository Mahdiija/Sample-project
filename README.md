


  نوار کناری واکنش‌گرا با جاوااسکریپت خالص
  این پروژه یک نوار کناری کاملاً واکنش‌گرا را نشان می‌دهد که با جاوااسکریپت خالص ساخته شده است، بدون استفاده از هیچ کتابخانه یا فریمورک خارجی. این پروژه شامل ویژگی‌هایی مانند حالت تاریک/روشن، تغییر زبان، ناوبری واکنش‌گرا و مدیریت محتوای پویا برای تب‌ها با استفاده از ذخیره‌سازی محلی (Local Storage) است.

   ویژگی‌ها
   نوار کناری واکنش‌گرا
   در صفحه‌نمایش‌های کوچک، نوار کناری به یک منوی همبرگری تبدیل می‌شود.
    کلیک روی آیکون منو، نوار کناری باز می‌شود و با کلیک خارج از آن، انتخاب یک آیتم منو، یا کلیک روی دکمه بسته شدن، بسته می‌شود.
   تغییر حالت (تاریک/روشن)
   یک دکمه مخصوص به کاربران اجازه می‌دهد بین حالت تاریک و روشن جابه‌جا شوند.
   حالت انتخاب‌شده در Local Storage ذخیره می‌شود و با رفرش صفحه باقی می‌ماند.
   تغییر زبان
   یک دکمه دیگر امکان تغییر زبان بین انگلیسی و فارسی را فراهم می‌کند.
   زبان انتخاب‌شده در Local Storage ذخیره می‌شود و با رفرش صفحه باقی می‌ماند.
   تب‌ها و منوهای کشویی پویا
   نوار کناری شامل چندین تب است (مانند: خانه، درباره من، نمونه‌کار، پروژه‌ها، تماس با من).
   هر تب ویژگی‌های خاصی مانند منوهای کشویی یا افکت‌های هاور دارد.
   داده‌های هر تب به صورت پویا با استفاده از forEach نمایش داده می‌شوند.
   حفظ وضعیت در مرورگر
   این پروژه از Local Storage برای ذخیره اطلاعات زیر استفاده می‌کند:
   حالت انتخاب‌شده (تاریک/روشن).
   زبان انتخاب‌شده (فارسی/انگلیسی).
   تب فعال، به طوری که صفحه جاری کاربر پس از رفرش حفظ شود.
  تکنولوژی‌های استفاده شده
HTML: برای ساختار و لایه‌بندی.
CSS: برای طراحی، واکنش‌گرایی و انیمیشن‌ها.
ج   اوااسکریپت خالص (Vanilla): برای تعاملات و منطق، بدون استفاده از کتابخانه‌ها یا فریمورک‌های خارجی.


Responsive Sidebar with Pure JavaScript
This project showcases a fully functional responsive sidebar built with pure JavaScript, without any external libraries or frameworks. The project includes features such as dark/light mode, language toggling, responsive navigation, and dynamic tab content management using local storage.

Features
Responsive Sidebar
On smaller screens, the sidebar transforms into a hamburger menu.
Clicking the hamburger icon opens the sidebar, while clicking outside, selecting a navigation item, or pressing the close button hides it.
Theme Toggle
A dedicated switcher allows users to toggle between dark and light modes.
The selected theme is stored in localStorage, so it persists across page reloads.
Language Switcher
Another switcher toggles between English and Persian (Farsi).
The selected language is stored in localStorage for persistence.
Dynamic Tabs and Dropdowns
The sidebar contains multiple tabs (e.g., Home, About, Portfolio, Projects, Contact).
Each tab includes unique features like dropdowns or hover effects for enhanced interactivity.
Tab data is dynamically displayed using forEach to map through arrays of content.
State Persistence
The project uses localStorage to save:
The selected theme (dark/light).
The selected language (English/Persian).
The active tab, so the user’s current page is preserved on refresh.
Technologies Used
HTML: For the layout and structure.
CSS: For styling, responsiveness, and animations.
JavaScript (Vanilla): For interactivity and logic, with no external libraries or frameworks.
