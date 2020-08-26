const SET_LOCALES = 'locales_reducer/SET_LOCALES';

const initState = {
    stringsToDisplay: {
        locale: 'en',
        strings: {
            bannerInfo: {
                bannerName: "Banner name:",
                goToConfig: "Go to config",
            },
            bannerVariants: {
                secondPageMainSign: "Select the element with which you want to increase your revenue.",
                countdownTimerBar: "Countdown timer bar",
                countdownDescription: "Special countdown timer which can render on product or other pages, signs\n" +
                    "that great offer has begun!",
                countdownRevenue: "About 20% more revenue",
                saleBanner: "Sale banners",
                saleBannerDescription: "Incredible label which will underline the unique of your products.",
                saleBannerRevenue: "About 25% more revenue",
                animationBanner: "Discount popups",
                animationDescription: "Gift animation to your customers!",
                animationRevenue: "About 15% more revenue",
                continue: "Continue"
            },
            design: {
                timerDesign: "Timer design",
                backgroundColor: "Background color:",
                bannerHeight: "Banner height:",
                borderWidth: "Border width:",
                borderColor: "Border color:",
                bannerTexts: "Banner texts:",
                firstText: "First text",
                pleaseEnterText: "Please enter text",
                secondText: "Second text",
                discountLink: "Discount link",
                title: "Title:",
                link: "Link:",
            },
            initPage: {
                mainHeader: "TopSale Countdown Banner",
                subheader: "Increase sales with urgency, countdown timer, labels and awesome banners",
                button: "Create Banner"
            },
            preview: {
                bannerPreview: "Banner preview",
                days: "Days",
                hours: "Hours",
                minutes: "Minutes",
                seconds: "Seconds"
            },
            primary: {
                bannerName: "Banner name:",
                enterName: "Enter name...",
                pleaseEnterName: 'Please enter name',
                startDate: "Start date",
                endDate: "End date",
                timerDisplay: "Timer display",
                banner: "Banner",
                widget: "Widget",
                timerPosition: "Timer position at the page",
                top: "Top",
                displaysTimerTop: "Displays timer at the top of the store.",
                bottom: "Bottom",
                displaysTimerBottom: "Displays timer at the bottom of the store.",
                displaySticky: "Display sticky",
                pagesShown: "Pages where timer is shown",
                all: "All",
                displayAtAll: "Displays timer at all pages.",
                collections: "Collections",
                displayAtCollections: "Displays timer at certain collection pages.",
                browseCollections: "Browse collections",
                pickAllCollections: "Pick All Collections",
                products: "Products",
                displayAtProducts: "Displays timer at certain product pages.",
                browseProducts: "Browse products",
                cancel: "Cancel",
                pickAllProducts: "Pick All Products",
                widgetDescription: "Widget description",
                widgetDescriptionText: "Compact timer, available on product pages only. Renders beneath product title",
                widgetPlacement: "Widget placement",
                aboveTitle: "Above title",
                belowTitle: "Below title",
                abovePrice: "Above price",
                belowPrice: "Below price",
                aboveBuyButton: "Above buy button",
                belowBuyButton: "Below buy button",
                productPagesWithTimer: "Product pages with timer",
                utils: "Utils",
                repeat: "Repeat timer when it ends"
            },
            existing_config: {
                existingCountdownTimer: "Existing Countdown Timer:",
                existingBadgeBanner: "Existing Badge Banner:",
                existingAnimationPopup: "Existing Animation Popup:",
                bannerName: "Banner name:",
                actions: "Actions:",
                timer: "Timer",
                edit: "Edit",
                delete: "Delete"
            },
            animations: {
                customize: "Customize your special popup!",
                save: "Save",
                bannerName: "Popup name:",
                enterName: "Enter name...",
                pleaseEnterName: 'Please enter name',
                pickAnimation: "Pick animation",
                messageText: "Your message text:",
                enterText: "Enter text...",
                pleaseEnterText: "Please enter text",
                productPagesWithPopup: "Product pages with popup:",
                browseProducts: "Browse products",
                cancel: "Cancel",
                pickAllProducts: "Pick All Products",
                preview: "Popup preview"
            },
            badges: {
                customize: "Customize your special badge banner!",
                save: "Save",
                bannerName: "Banner name:",
                enterName: "Enter name...",
                pleaseEnterName: 'Please enter name',
                pickCategory: "Pick category",
                category: "Category:",
                pickBadge: "Pick badge",
                bannerPlacement: "Banner placement",
                productPagesWithBanner: "Product pages with banner:",
                browseProducts: "Browse products",
                cancel: "Cancel",
                pickAllProducts: "Pick All Products",
                aboveTitle: "Above title",
                belowTitle: "Below title",
                abovePrice: "Above price",
                belowPrice: "Below price",
                aboveBuyButton: "Above buy button",
                belowBuyButton: "Below buy button",
            },
            countdown: {
                customize: "Customize your countdown timer!",
                bannerDesign: "Banner design",
                warningTitle: "Banner interception detected",
                warningMessage: "This banner are going to render on the same pages there the existing " +
                    "one of this type has been already rendered. This will cause critical malfunctions." +
                    "Please, check vulnerabilities below and correct them",
                reason: "Vulnerability:",
                settings: "Settings",
                save: "Save"
            },
            success: {
                mainHeading: "Congratulations!",
                messageTimer: "You have created Countdown timer bar. Now please wait some days and your revenue will be increased for 25%.",
                messageBanner: "You have created Sale banner. Now please wait some days and your revenue will be increased for 15%.",
                messagePopup: "You have created Pop-up. Now please wait some days and your revenue will be increased for 20%.",
                button: "Home"
            },
            mainScreen: {
                secondPageMainSign: "Your Banners:",
                createNew: "Create new",
                createBanner: "Create banner",
                hereIsNo: "No banner of this type has been created yet",
                toastMessage: "Banner deleted"
            }
        }
    },
    localesStorage: [
        {
            locale: 'en',
            strings: {
                bannerInfo: {
                    bannerName: "Banner name:",
                    goToConfig: "Go to config",
                },
                bannerVariants: {
                    secondPageMainSign: "Select the element with which you want to increase your revenue.",
                    countdownTimerBar: "Countdown timer bar",
                    countdownDescription: "Special countdown timer which can render on product or other pages, signs\n" +
                        "that great offer has begun!",
                    countdownRevenue: "About 20% more revenue",
                    saleBanner: "Sale banners",
                    saleBannerDescription: "Incredible label which will underline the unique of your products.",
                    saleBannerRevenue: "About 25% more revenue",
                    animationBanner: "Discount popups",
                    animationDescription: "Gift animation to your customers!",
                    animationRevenue: "About 15% more revenue",
                    continue: "Continue"
                },
                design: {
                    timerDesign: "Timer design",
                    backgroundColor: "Background color:",
                    bannerHeight: "Banner height:",
                    borderWidth: "Border width:",
                    borderColor: "Border color:",
                    bannerTexts: "Banner texts:",
                    firstText: "First text",
                    pleaseEnterText: "Please enter text",
                    secondText: "Second text",
                    discountLink: "Discount link",
                    title: "Title:",
                    link: "Link:",
                },
                initPage: {
                    mainHeader: "TopSale Countdown Banner",
                    subheader: "Increase sales with urgency, countdown timer, labels and awesome banners",
                    button: "Create Banner"
                },
                preview: {
                    bannerPreview: "Banner preview",
                    days: "Days",
                    hours: "Hours",
                    minutes: "Minutes",
                    seconds: "Seconds"
                },
                primary: {
                    bannerName: "Banner name:",
                    enterName: "Enter name...",
                    pleaseEnterName: 'Please enter name',
                    startDate: "Start date",
                    endDate: "End date",
                    timerDisplay: "Timer display",
                    banner: "Banner",
                    widget: "Widget",
                    timerPosition: "Timer position at the page",
                    top: "Top",
                    displaysTimerTop: "Displays timer at the top of the store.",
                    bottom: "Bottom",
                    displaysTimerBottom: "Displays timer at the bottom of the store.",
                    displaySticky: "Display sticky",
                    pagesShown: "Pages where timer is shown",
                    all: "All",
                    displayAtAll: "Displays timer at all pages.",
                    collections: "Collections",
                    displayAtCollections: "Displays timer at certain collection pages.",
                    browseCollections: "Browse collections",
                    pickAllCollections: "Pick All Collections",
                    products: "Products",
                    displayAtProducts: "Displays timer at certain product pages.",
                    browseProducts: "Browse products",
                    cancel: "Cancel",
                    pickAllProducts: "Pick All Products",
                    widgetDescription: "Widget description",
                    widgetDescriptionText: "Compact timer, available on product pages only. Renders beneath product title",
                    widgetPlacement: "Widget placement",
                    aboveTitle: "Above title",
                    belowTitle: "Below title",
                    abovePrice: "Above price",
                    belowPrice: "Below price",
                    aboveBuyButton: "Above buy button",
                    belowBuyButton: "Below buy button",
                    productPagesWithTimer: "Product pages with timer",
                    utils: "Utils",
                    repeat: "Repeat timer when it ends"
                },
                existing_config: {
                    existingCountdownTimer: "Existing Countdown Timer:",
                    existingBadgeBanner: "Existing Badge Banner:",
                    existingAnimationPopup: "Existing Animation Popup:",
                    bannerName: "Banner name:",
                    actions: "Actions:",
                    timer: "Timer",
                    edit: "Edit",
                    delete: "Delete"
                },
                animations: {
                    customize: "Customize your special popup!",
                    save: "Save",
                    bannerName: "Popup name:",
                    enterName: "Enter name...",
                    pleaseEnterName: 'Please enter name',
                    pickAnimation: "Pick animation",
                    messageText: "Your message text:",
                    enterText: "Enter text...",
                    pleaseEnterText: "Please enter text",
                    productPagesWithPopup: "Product pages with popup:",
                    browseProducts: "Browse products",
                    cancel: "Cancel",
                    pickAllProducts: "Pick All Products",
                    preview: "Popup preview"
                },
                badges: {
                    customize: "Customize your special badge banner!",
                    save: "Save",
                    bannerName: "Banner name:",
                    enterName: "Enter name...",
                    pleaseEnterName: 'Please enter name',
                    pickCategory: "Pick category",
                    category: "Category:",
                    pickBadge: "Pick badge",
                    bannerPlacement: "Banner placement",
                    productPagesWithBanner: "Product pages with banner:",
                    browseProducts: "Browse products",
                    cancel: "Cancel",
                    pickAllProducts: "Pick All Products",
                    aboveTitle: "Above title",
                    belowTitle: "Below title",
                    abovePrice: "Above price",
                    belowPrice: "Below price",
                    aboveBuyButton: "Above buy button",
                    belowBuyButton: "Below buy button",
                },
                countdown: {
                    customize: "Customize your countdown timer!",
                    save: "Save"
                },
                success: {
                    mainHeading: "Banner added successful!",
                    messageTimer: "You have created Countdown timer bar. Now please wait some days and your revenue will be increased for 25%.",
                    messageBanner: "You have created Sale banner. Now please wait some days and your revenue will be increased for 15%.",
                    messagePopup: "You have created Pop-up. Now please wait some days and your revenue will be increased for 20%.",
                    button: "Go to main"
                },
                mainScreen: {
                    secondPageMainSign: "Your Banners:",
                    createNew: "Create new",
                    createBanner: "Create banner",
                    hereIsNo: "No banner of this type has been created yet",
                    toastMessage: "Banner deleted"
                }
            }
        },
        {
            "locale": "ru",
            "strings": {
                "bannerInfo": {
                    "bannerName": "Название баннера:",
                    "goToConfig": "Перейти к конфигурации"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Выберите элемент, с помощью которого вы хотите увеличить свой доход.",
                    "countdownTimerBar": "Панель таймера обратного отсчета",
                    "countdownDescription": "Специальный таймер обратного отсчета, который может отображаться на продукте или других страницах, означает, что распродажа началась!",
                    "countdownRevenue": "Примерно на 20% больше выручки",
                    "saleBanner": "Рекламная вывеска",
                    "saleBannerDescription": "Невероятная вывеска, которая подчернет уникальность ваших продуктов.",
                    "saleBannerRevenue": "Примерно на 25% больше выручки",
                    "animationBanner": "Модальное окно с анимацией",
                    "animationDescription": "Подарочная анимация Вашим клиентам!",
                    "animationRevenue": "Примерно на 15% больше выручки",
                    "continue": "Продолжить"
                },
                "design": {
                    "timerDesign": "Дизайн таймера",
                    "backgroundColor": "Цвет фона:",
                    "bannerHeight": "Высота баннера",
                    "borderWidth": "Ширина границы:",
                    "borderColor": "Цвет границы",
                    "bannerTexts": "Тексты баннеров:",
                    "firstText": "Первый текст",
                    "pleaseEnterText": "Пожалуйста, введите текст",
                    "secondText": "Второй текст",
                    "discountLink": "Ссылка на скидку",
                    "title": "Заголовок",
                    "link": "Ссылка:"
                },
                "initPage": {
                    "mainHeader": "TopSale Countdown Banner",
                    "subheader": "Увеличивайте продажи с помощью таймера обратного отсчета, анимаций и потрясающих баннеров",
                    "button": "Создать баннер"
                },
                "preview": {
                    "bannerPreview": "Предпросмотр",
                    "days": "Дни",
                    "hours": "Часы",
                    "minutes": "Минуты",
                    "seconds": "Секунды"
                },
                "primary": {
                    "bannerName": "Название баннера:",
                    "enterName": "Введите имя...",
                    "pleaseEnterName": "Пожалуйста, введите имя",
                    "startDate": "Дата начала",
                    "endDate": "Дата окончания",
                    "timerDisplay": "Дисплей таймера",
                    "banner": "Баннер",
                    "widget": "Виджет",
                    "timerPosition": "Положение таймера на странице",
                    "top": "Топ",
                    "displaysTimerTop": "Отображает таймер в верхней части магазина.",
                    "bottom": "Снизу",
                    "displaysTimerBottom": "Отображает таймер в нижней части магазина.",
                    "displaySticky": "Отобразить закрепленно",
                    "pagesShown": "Страницы, на которых отображается таймер",
                    "all": "Все",
                    "displayAtAll": "Отображает таймер на всех страницах.",
                    "collections": "Коллекции",
                    "displayAtCollections": "Отображает таймер на определенных страницах коллекций.",
                    "browseCollections": "Загрузить коллекции",
                    "pickAllCollections": "Выбрать все коллекции",
                    "allCollectionsPicked": "Выбраны все коллекции",
                    "products": "Товары",
                    "displayAtProducts": "Отображает таймер на определенных страницах товаров.",
                    "browseProducts": "Загрузить товары",
                    "cancel": "Отменить",
                    "pickAllProducts": "Выбрать все товары",
                    "allProductsPicked": "Выбраны все товары",
                    "widgetDescription": "Описание виджета",
                    "widgetDescriptionText": "Компактный таймер, доступный только на страницах товаров.",
                    "widgetPlacement": "Расположение виджета",
                    "aboveTitle": "Над заголовком",
                    "belowTitle": "Под заголовком",
                    "abovePrice": "Выше цены",
                    "belowPrice": "Ниже цены",
                    "aboveBuyButton": "Над кнопкой «Купить»",
                    "belowBuyButton": "Под кнопкой «Купить»",
                    "productPagesWithTimer": "Страницы товаров с таймером",
                    "utils": "Утилиты",
                    "repeat": "Повторить таймер, когда он закончится"
                },
                "existing_config": {
                    "existingCountdownTimer": "Существующий таймер обратного отсчета:",
                    "existingBadgeBanner": "Существующий баннер",
                    "existingAnimationPopup": "Существующее модальное окно анимации:",
                    "bannerName": "Название баннера:",
                    "actions": "Действия:",
                    "timer": "Таймер",
                    "edit": "Редактировать",
                    "delete": "Удалить"
                },
                "animations": {
                    "customize": "Настройте свое модальное окно!",
                    "save": "Сохранить",
                    "bannerName": "Название баннера:",
                    "enterName": "Введите название...",
                    "pleaseEnterName": "Пожалуйста, введите название",
                    "pickAnimation": "Выберите анимацию",
                    "messageText": "Ваше сообщение:",
                    "enterText": "Введите текст...",
                    "pleaseEnterText": "Please enter text",
                    "browseProducts": "Загрузить товары",
                    "cancel": "Отменить",
                    "productPagesWithPopup": "Страницы товаров с модальным окном:",
                    "pickAllProducts": "Выбрать все товары",
                    "allProductsPicked": "Выбраны все товары",
                    "preview": "Предварительный просмотр модального окна"
                },
                "badges": {
                    "customize": "Настройте свою рекламную вывеску!",
                    "save": "Сохранить",
                    "bannerName": "Название баннера:",
                    "enterName": "Введите название...",
                    "pleaseEnterName": "Пожалуйста, введите название",
                    "pickCategory": "Выберите категорию",
                    "category": "Категория:",
                    "pickBadge": "Выбрать значок",
                    "bannerPlacement": "Размещение баннеров",
                    "productPagesWithBanner": "Страницы товаров с баннером",
                    "browseProducts": "Загрузить товары",
                    "cancel": "Отменить",
                    "pickAllProducts": "Выбрать все товары",
                    "allProductsPicked": "Выбраны все товары",
                    "aboveTitle": "Над заголовком",
                    "belowTitle": "Под заголовком",
                    "abovePrice": "Выше цены",
                    "belowPrice": "Ниже цены",
                    "aboveBuyButton": "Над кнопкой «Купить»",
                    "belowBuyButton": "Под кнопкой «Купить»"
                },
                "countdown": {
                    "customize": "Настройте свой таймер обратного отсчета!",
                    "bannerDesign": "Дизайн баннера",
                    "warningTitle": "Обнаружено наложение баннеров",
                    "warningMessage": "Этот баннер будет отображен на странице, где уже есть баннер этого типа. Это вызовет нарушения в работе баннеров. Пожалуйста, просмотрите уязвимости и исправьте их",
                    "reason": "Уязвимость:",
                    "settings": "Настройки",
                    "save": "Сохранить"
                },
                "success": {
                    "mainHeading": "Поздравляем!",
                    "messageTimer": "Вы создали таймер обратного отсчета. Теперь, пожалуйста, подождите несколько дней, и ваш доход будет увеличен на 25%.",
                    "messageBanner": "Вы создали товарную вывеску. Теперь, пожалуйста, подождите несколько дней, и ваш доход будет увеличен на 15%.",
                    "messagePopup": "Вы создали модальное окно. Теперь, пожалуйста, подождите несколько дней, и ваш доход будет увеличен на 20%.",
                    "button": "Главная"
                },
                "mainScreen": {
                    "secondPageMainSign": "Ваши баннеры:",
                    "createNew": "Создать новый",
                    "createBanner": "Создать баннер",
                    "hereIsNo": "Баннер этого типа еще не создан",
                    "toastMessage": "Баннер удален"
                }
            }
        },
        {
            locale: "de",
            strings: {
                "bannerInfo": {
                    "bannerName": "Banner Name:",
                    "goToConfig": "Gehe zu Konfiguration"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Wählen Sie den Artikel aus, mit dem Sie Ihr Einkommen erhöhen möchten.",
                    "countdownTimerBar": "Countdown-Timer-Panel",
                    "countdownDescription": "Ein spezieller Countdown-Timer, der auf einem Produkt oder anderen Seiten angezeigt werden kann, bedeutet, dass der Verkauf begonnen hat!",
                    "countdownRevenue": "Ca. 20% mehr Umsatz",
                    "saleBanner": "Werbung Schild",
                    "saleBannerDescription": "Ein unglaubliches Zeichen, das die Einzigartigkeit Ihrer Produkte hervorhebt.",
                    "saleBannerRevenue": "Ca. 25% mehr Umsatz",
                    "animationBanner": "Modales Fenster mit Animation",
                    "animationDescription": "Geschenk-Animation für Ihre Kunden!",
                    "animationRevenue": "Ca. 15% mehr Umsatz",
                    "continue": "Weiterhin"
                },
                "design": {
                    "timerDesign": "Timer-Design",
                    "backgroundColor": "Hintergrundfarbe:",
                    "bannerHeight": "Banner-Höhe",
                    "borderWidth": "Begrenzungsbreite:",
                    "borderColor": "Farbe des Rahmens",
                    "bannerTexts": "Banner-Texte:",
                    "firstText": "Erster Text",
                    "pleaseEnterText": "Bitte geben Sie den Text ein",
                    "secondText": "Zweiter Text",
                    "discountLink": "Rabatt-Link",
                    "title": "Schlagzeile",
                    "link": "Referenz:"
                },
                "initPage": {
                    "mainHeader": "TopSale Countdown Banner",
                    "subheader": "Steigern Sie den Umsatz mit Countdown-Timer, Animationen und atemberaubenden Banner",
                    "button": "Banner erstellen"
                },
                "preview": {
                    "bannerPreview": "Vorschau",
                    "days": "Tage",
                    "hours": "Stunden",
                    "minutes": "Protokoll",
                    "seconds": "Nachschlag"
                },
                "primary": {
                    "enterName": "Geben Sie einen Namen ein...",
                    "pleaseEnterName": "Bitte geben Sie den Namen ein",
                    "startDate": "Startdatum",
                    "endDate": "Enddatum",
                    "timerDisplay": "Timer-Anzeige",
                    "banner": "Banner",
                    "widget": "Widget",
                    "timerPosition": "Timer-Position auf Seite",
                    "top": "Top",
                    "displaysTimerTop": "Zeigt den Timer am oberen Rand des Ladens an.",
                    "bottom": "Unterseite",
                    "displaysTimerBottom": "Zeigt den Timer am unteren Rand des Ladens an.",
                    "displaySticky": "Anzeige angeheftet",
                    "pagesShown": "Seiten, auf denen der Timer angezeigt wird",
                    "all": "Alle",
                    "displayAtAll": "Zeigt den Timer auf allen Seiten an.",
                    "collections": "Sammlungen",
                    "displayAtCollections": "Zeigt einen Timer auf bestimmten Auflistungsseiten an.",
                    "browseCollections": "Sammlungen herunterladen",
                    "pickAllCollections": "Alle Sammlungen auswählen",
                    "products": "Güter",
                    "displayAtProducts": "Zeigt einen Timer auf bestimmten Produktseiten an.",
                    "browseProducts": "Produkte herunterladen",
                    "cancel": "Stornieren",
                    "pickAllProducts": "Alle Produkte auswählen",
                    "widgetDescription": "Widget-Beschreibung",
                    "widgetDescriptionText": "Kompakter Timer ist nur auf Produktseiten verfügbar.",
                    "widgetPlacement": "Widget-Standort",
                    "aboveTitle": "Über der Überschrift",
                    "belowTitle": "Unter der Überschrift",
                    "abovePrice": "Oben Preis",
                    "belowPrice": "Unter dem Preis",
                    "aboveBuyButton": "Über der Schaltfläche „Kaufen“",
                    "belowBuyButton": "Unter dem Button „Kaufen“",
                    "productPagesWithTimer": "Produktseiten mit Timer",
                    "utils": "Dienstprogramme",
                    "repeat": "Wiederholen Sie den Timer, wenn er endet"
                },
                "existing_config": {
                    "existingCountdownTimer": "Vorhandener Countdown-Timer:",
                    "existingBadgeBanner": "Vorhandenes Banner",
                    "existingAnimationPopup": "Vorhandenes modales Animationsfenster:",
                    "actions": "Aktionen:",
                    "timer": "Zeitschaltuhr",
                    "edit": "Bearbeiten",
                    "delete": "Deinstallieren"
                },
                "animations": {
                    "customize": "Passen Sie Ihr modales Fenster an!",
                    "save": "sparen",
                    "pickAnimation": "Animation auswählen",
                    "messageText": "Ihre Nachricht:",
                    "enterText": "Text eingeben...",
                    "productPagesWithPopup": "Produktseiten mit modalem Fenster:",
                    "preview": "Modale Fenstervorschau"
                },
                "badges": {
                    "pickCategory": "Wählen Sie eine Kategorie aus",
                    "category": "Kategorie:",
                    "pickBadge": "Wählen Sie ein Symbol aus",
                    "bannerPlacement": "Banner-Platzierung",
                    "productPagesWithBanner": "Produktseiten mit Banner"
                },
                "countdown": {
                    "bannerDesign": "Banner-Design",
                    "warningTitle": "Banner Overlay erkannt",
                    "warningMessage": "Dieses Banner wird auf einer Seite angezeigt, auf der bereits ein Banner dieses Typs vorhanden ist. Dies wird Verletzungen in der Arbeit der Banner verursachen. Bitte überprüfen Sie die Sicherheitsanfälligkeiten und beheben Sie sie",
                    "reason": "Schwachstelle:",
                    "settings": "Einstellungen"
                },
                "success": {
                    "mainHeading": "Herzlichen Glückwunsch!",
                    "messageTimer": "Sie haben einen Countdown-Timer erstellt.Jetzt warten Sie bitte ein paar Tage und Ihr Einkommen wird um 25% erhöht.",
                    "messageBanner": "Sie haben eine Produktkennzeichnung erstellt. Bitte warten Sie ein paar Tage und Ihr Einkommen wird um 15% erhöht.",
                    "messagePopup": "Sie haben ein modales Fenster erstellt.Nun warten Sie bitte ein paar Tage und Ihr Einkommen wird um 20% erhöht.",
                    "button": "Zuhause"
                },
                "mainScreen": {
                    "secondPageMainSign": "Ihre Banner:",
                    "createNew": "Erstellen Sie eine neue",
                    "createBanner": "Banner erstellen",
                    "hereIsNo": "Banner dieses Typs wurde noch nicht erstellt",
                    "toastMessage": "Banner entfernt"
                }
            }
        },
        {
            locale: "zh",
            strings: {
                "bannerInfo": {
                    "bannerName": "横幅名称：",
                    "goToConfig": "转到配置"
                },
                "bannerVariants": {
                    "secondPageMainSign": "选择您想要增加收入的项目。",
                    "countdownTimerBar": "倒计时器面板",
                    "countdownDescription": "一个特殊的倒计时器，可以显示在产品或其他页面上，意味着销售已经开始！",
                    "countdownRevenue": "收入增加约 20%",
                    "saleBanner": "广告标志",
                    "saleBannerDescription": "一个令人难以置信的标志，将突出您的产品的独特性。",
                    "saleBannerRevenue": "收入增加约 25%",
                    "animationBanner": "带动画的模态窗口",
                    "animationDescription": "礼物动画给您的客户！",
                    "animationRevenue": "收入增加约 15%",
                    "continue": "继续"
                },
                "design": {
                    "timerDesign": "定时器设计",
                    "backgroundColor": "背景颜色：",
                    "bannerHeight": "横幅高度",
                    "borderWidth": "边界宽度：",
                    "borderColor": "边框颜色",
                    "bannerTexts": "横幅文本：",
                    "firstText": "第一个文本",
                    "pleaseEnterText": "请输入文本",
                    "secondText": "第二个案文",
                    "discountLink": "折扣链接",
                    "title": "标题",
                    "link": "参考："
                },
                "initPage": {
                    "mainHeader": "顶级销售倒计时横幅",
                    "subheader": "利用倒计时器、动画和令人惊叹的横幅提高销售额",
                    "button": "创建横幅"
                },
                "preview": {
                    "bannerPreview": "预览",
                    "days": "几天",
                    "hours": "小时",
                    "minutes": "几分钟",
                    "seconds": "秒"
                },
                "primary": {
                    "enterName": "输入名称...",
                    "pleaseEnterName": "请输入名称",
                    "startDate": "开始日期",
                    "endDate": "结束日期",
                    "timerDisplay": "计时器显示",
                    "banner": "横幅",
                    "widget": "小部件",
                    "timerPosition": "页面上的计时器位置",
                    "top": "顶部",
                    "displaysTimerTop": "在商店顶部显示计时器。",
                    "bottom": "底部",
                    "displaysTimerBottom": "在商店底部显示计时器。",
                    "displaySticky": "显示固定",
                    "pagesShown": "显示计时器的页面",
                    "all": "所有",
                    "displayAtAll": "在所有页面上显示计时器。",
                    "collections": "收藏品",
                    "displayAtCollections": "在特定集合页面上显示计时器。",
                    "browseCollections": "下载收藏夹",
                    "pickAllCollections": "选择所有收藏夹",
                    "products": "货物",
                    "displayAtProducts": "在特定产品页面上显示计时器。",
                    "browseProducts": "下载产品",
                    "cancel": "取消",
                    "pickAllProducts": "选择所有产品",
                    "widgetDescription": "小部件说明",
                    "widgetDescriptionText": "紧凑型计时器仅可在产品页面上使用。",
                    "widgetPlacement": "小部件位置",
                    "aboveTitle": "标题上方",
                    "belowTitle": "在标题下",
                    "abovePrice": "以上价格",
                    "belowPrice": "低于价格",
                    "aboveBuyButton": "在 “购买” 按钮上方",
                    "belowBuyButton": "在 “购买” 按钮下方",
                    "productPagesWithTimer": "带计时器的产品页面",
                    "utils": "公用事业",
                    "repeat": "重复计时器结束时"
                },
                "existing_config": {
                    "existingCountdownTimer": "现有倒计时器：",
                    "existingBadgeBanner": "现有横幅",
                    "existingAnimationPopup": "现有模态动画窗口：",
                    "actions": "操作：",
                    "timer": "计时器",
                    "edit": "编辑",
                    "delete": "卸载"
                },
                "animations": {
                    "customize": "自定义您的模态窗口！",
                    "save": "保存",
                    "pickAnimation": "选择动画",
                    "messageText": "您的消息：",
                    "enterText": "输入文本...",
                    "productPagesWithPopup": "带模态窗口的产品页面：",
                    "preview": "模态窗口预览"
                },
                "badges": {
                    "pickCategory": "选择一个类别",
                    "category": "类别：",
                    "pickBadge": "选择图标",
                    "bannerPlacement": "横幅放置",
                    "productPagesWithBanner": "带横幅的产品页面"
                },
                "countdown": {
                    "bannerDesign": "横幅设计",
                    "warningTitle": "检测到横幅叠加",
                    "warningMessage": "此横幅将显示在已有此类横幅的页面上。这将导致违反横幅的工作。请查看这些漏洞并修复它们",
                    "reason": "漏洞：",
                    "settings": "设置"
                },
                "success": {
                    "mainHeading": "恭喜你！",
                    "messageTimer": "您已经创建了倒计时器。现在，请等待几天，您的收入将增加 25％。",
                    "messageBanner": "您已创建产品标牌。现在，请等待几天，你的收入将增加 15％。",
                    "messagePopup": "您已经创建了一个模式窗口。现在，请等待几天，您的收入将增加 20％。",
                    "button": "家"
                },
                "mainScreen": {
                    "secondPageMainSign": "您的横幅：",
                    "createNew": "创建新的",
                    "createBanner": "创建横幅",
                    "hereIsNo": "此类型的横幅尚未创建",
                    "toastMessage": "已删除横幅"
                }
            }
        },
        {
            locale: "cs",
            strings: {
                "bannerInfo": {
                    "bannerName": "Název banneru:",
                    "goToConfig": "Přejít na konfiguraci"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Vyberte položku, se kterou chcete zvýšit svůj příjem.",
                    "countdownTimerBar": "Panel časovače odpočítávání",
                    "countdownDescription": "Speciální časovač odpočítávání, který může být zobrazen na produktu nebo na jiných stránkách znamená, že prodej začal!",
                    "countdownRevenue": "Přibližně o 20% více příjmů",
                    "saleBanner": "Reklamní značka",
                    "saleBannerDescription": "Neuvěřitelné znamení, které zvýrazní jedinečnost vašich produktů.",
                    "saleBannerRevenue": "Přibližně o 25% více příjmů",
                    "animationBanner": "Modální okno s animací",
                    "animationDescription": "Dárková animace pro vaše zákazníky!",
                    "animationRevenue": "Přibližně o 15% více příjmů",
                    "continue": "Pokračovat"
                },
                "design": {
                    "timerDesign": "Návrh časovače",
                    "backgroundColor": "Barva pozadí:",
                    "bannerHeight": "Výška banneru",
                    "borderWidth": "Šířka hranice:",
                    "borderColor": "Barva ohraničení",
                    "bannerTexts": "Reklamní texty:",
                    "firstText": "První text",
                    "pleaseEnterText": "Zadejte prosím text",
                    "secondText": "Druhý text",
                    "discountLink": "Odkaz na slevy",
                    "title": "Nadpis",
                    "link": "Reference:"
                },
                "initPage": {
                    "mainHeader": "TopSALE Odpočítávání",
                    "subheader": "Zvyšte prodej díky časovači odpočítávání, animacím a ohromujícím bannerům",
                    "button": "Vytvořit banner"
                },
                "preview": {
                    "bannerPreview": "Náhled",
                    "days": "Dny",
                    "hours": "Hodiny",
                    "minutes": "Minuty",
                    "seconds": "Sekundy"
                },
                "primary": {
                    "enterName": "Zadejte název...",
                    "pleaseEnterName": "Zadejte prosím jméno",
                    "startDate": "Datum zahájení",
                    "endDate": "Koncové datum",
                    "timerDisplay": "Zobrazení časovače",
                    "banner": "Banner",
                    "widget": "Widget",
                    "timerPosition": "Pozice časovače na stránce",
                    "top": "Nahoře",
                    "displaysTimerTop": "Zobrazí časovač v horní části obchodu.",
                    "bottom": "Spodní",
                    "displaysTimerBottom": "Zobrazí časovač ve spodní části obchodu.",
                    "displaySticky": "Připnutý displej",
                    "pagesShown": "Stránky, na kterých je časovač zobrazen",
                    "all": "Všechny",
                    "displayAtAll": "Zobrazí časovač na všech stránkách.",
                    "collections": "Sbírky",
                    "displayAtCollections": "Zobrazí časovač na stránkách určitých kolekcí.",
                    "browseCollections": "Stáhnout sbírky",
                    "pickAllCollections": "Vybrat všechny kolekce",
                    "products": "Zboží",
                    "displayAtProducts": "Zobrazí časovač na konkrétních stránkách produktu.",
                    "browseProducts": "Stáhněte si produkty",
                    "cancel": "Zrušit",
                    "pickAllProducts": "Vybrat všechny produkty",
                    "widgetDescription": "Popis widgetu",
                    "widgetDescriptionText": "Kompaktní časovač je k dispozici pouze na stránkách produktu.",
                    "widgetPlacement": "Umístění widgetu",
                    "aboveTitle": "Nad nadpis",
                    "belowTitle": "Pod nadpisem",
                    "abovePrice": "Nad cenou",
                    "belowPrice": "Pod cenou",
                    "aboveBuyButton": "Nad tlačítkem „Koupit“",
                    "belowBuyButton": "Pod tlačítkem „Koupit“",
                    "productPagesWithTimer": "Stránky produktu s časovačem",
                    "utils": "Pomůcky",
                    "repeat": "Opakujte časovač, když skončí"
                },
                "existing_config": {
                    "existingCountdownTimer": "Existující časovač odpočítávání:",
                    "existingBadgeBanner": "Stávající banner",
                    "existingAnimationPopup": "Existující modální okno animace:",
                    "actions": "Akce:",
                    "timer": "Časovač",
                    "edit": "Upravit",
                    "delete": "Odinstalujte"
                },
                "animations": {
                    "customize": "Přizpůsobte si modální okno!",
                    "save": "Uložit",
                    "pickAnimation": "Vybrat animaci",
                    "messageText": "Vaše zpráva:",
                    "enterText": "Zadejte text...",
                    "productPagesWithPopup": "Produktové stránky s modálním oknem:",
                    "preview": "Náhled modálního okna"
                },
                "badges": {
                    "pickCategory": "Vyberte kategorii",
                    "category": "Kategorie:",
                    "pickBadge": "Vyberte ikonu",
                    "bannerPlacement": "Umístění banneru",
                    "productPagesWithBanner": "Produktové stránky s bannerem"
                },
                "countdown": {
                    "bannerDesign": "Návrh bannerů",
                    "warningTitle": "Detekováno překrytí banneru",
                    "warningMessage": "Tento banner se zobrazí na stránce, kde již existuje banner tohoto typu. To způsobí porušení práce bannerů. Zkontrolujte chyby zabezpečení a opravte je",
                    "reason": "Chyba zabezpečení:",
                    "settings": "Nastavení"
                },
                "success": {
                    "mainHeading": "Gratuluji!",
                    "messageTimer": "Vytvořili jste časovač odpočítávání. Nyní prosím počkejte několik dní a váš příjem se zvýší o 25%.",
                    "messageBanner": "Vytvořili jste nápis produktu. Počkejte prosím pár dní a váš příjem se zvýší o 15%.",
                    "messagePopup": "Vytvořili jste modální okno.Nyní prosím počkejte několik dní a váš příjem se zvýší o 20%.",
                    "button": "Domov"
                },
                "mainScreen": {
                    "secondPageMainSign": "Vaše bannery:",
                    "createNew": "Vytvořit nový",
                    "createBanner": "Vytvořit banner",
                    "hereIsNo": "Banner tohoto typu ještě nebyl vytvořen",
                    "toastMessage": "Banner odstraněn"
                }
            }
        },
        {
            locale: 'da',
            strings: {
                "bannerInfo": {
                    "bannerName": "Bannernavn:",
                    "goToConfig": "Gå til Konfiguration"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Vælg det element, som du vil øge din indkomst med.",
                    "countdownTimerBar": "Panelet Nedtælling timer",
                    "countdownDescription": "En særlig nedtællingstimer, der kan vises på et produkt eller andre sider, betyder, at salget er startet!",
                    "countdownRevenue": "Ca. 20% mere omsætning",
                    "saleBanner": "Reklame",
                    "saleBannerDescription": "Et utroligt tegn, der vil fremhæve det unikke i dine produkter.",
                    "saleBannerRevenue": "Ca. 25% mere omsætning",
                    "animationBanner": "Modal vindue med animation",
                    "animationDescription": "Gave animation til dine kunder!",
                    "animationRevenue": "Ca. 15% flere indtægter",
                    "continue": "Fortsæt"
                },
                "design": {
                    "timerDesign": "Timer Design",
                    "backgroundColor": "Baggrundsfarve:",
                    "bannerHeight": "Bannerhøjde",
                    "borderWidth": "Grænsebredde:",
                    "borderColor": "Border farve",
                    "bannerTexts": "Banner-tekster:",
                    "firstText": "Første tekst",
                    "pleaseEnterText": "Indtast venligst teksten",
                    "secondText": "Anden tekst",
                    "discountLink": "Rabat link",
                    "title": "Overskriften",
                    "link": "Henvisning:"
                },
                "initPage": {
                    "mainHeader": "TopSale Nedtælling Banner",
                    "subheader": "Øg salget med nedtællingstimer, animationer og fantastiske bannere",
                    "button": "Opret banner"
                },
                "preview": {
                    "bannerPreview": "Forhåndsvisning",
                    "days": "Dage",
                    "hours": "Timer",
                    "minutes": "Minutter",
                    "seconds": "Sekunder"
                },
                "primary": {
                    "enterName": "Indtast et navn...",
                    "pleaseEnterName": "Indtast venligst navnet",
                    "startDate": "Startdato",
                    "endDate": "Slutdato",
                    "timerDisplay": "Timer display",
                    "banner": "- Banner",
                    "widget": "Widget",
                    "timerPosition": "Timer position på siden",
                    "top": "Øverst",
                    "displaysTimerTop": "Viser timeren øverst i butikken.",
                    "bottom": "Nederst",
                    "displaysTimerBottom": "Viser timeren nederst i butikken.",
                    "displaySticky": "Skærm fastgjort",
                    "pagesShown": "Sider, hvor timeren vises",
                    "all": "Alle",
                    "displayAtAll": "Viser timeren på alle sider.",
                    "collections": "Samlinger",
                    "displayAtCollections": "Viser en timer på bestemte samlinger sider.",
                    "browseCollections": "Download samlinger",
                    "pickAllCollections": "Vælg alle samlinger",
                    "products": "Varer",
                    "displayAtProducts": "Viser en timer på bestemte produktsider.",
                    "browseProducts": "Download produkter",
                    "cancel": "Aflys",
                    "pickAllProducts": "Vælg alle produkter",
                    "widgetDescription": "Beskrivelse af widget",
                    "widgetDescriptionText": "Kompakt timer kun tilgængelig på produktsider.",
                    "widgetPlacement": "Placering af widget",
                    "aboveTitle": "Over overskriften",
                    "belowTitle": "Under overskriften",
                    "abovePrice": "Over pris",
                    "belowPrice": "Under prisen",
                    "aboveBuyButton": "Over knappen „Køb“",
                    "belowBuyButton": "Under knappen „Køb“",
                    "productPagesWithTimer": "Produktsider med timer",
                    "utils": "Hjælpeprogrammer",
                    "repeat": "Gentag timeren, når den slutter"
                },
                "existing_config": {
                    "existingCountdownTimer": "Eksisterende nedtællingstimer:",
                    "existingBadgeBanner": "Eksisterende banner",
                    "existingAnimationPopup": "Eksisterende modal animation vindue:",
                    "actions": "Handlinger:",
                    "timer": "Timer",
                    "edit": "Rediger",
                    "delete": "Afinstaller"
                },
                "animations": {
                    "customize": "Tilpas din modal vindue!",
                    "save": "Gem",
                    "pickAnimation": "Vælg animation",
                    "messageText": "Din besked:",
                    "enterText": "Indtast tekst...",
                    "productPagesWithPopup": "Produktsider med modal vindue:",
                    "preview": "Eksempel på modal vindue"
                },
                "badges": {
                    "pickCategory": "Vælg en kategori",
                    "category": "Kategori:",
                    "pickBadge": "Vælg et ikon",
                    "bannerPlacement": "Placering af banner",
                    "productPagesWithBanner": "Produktsider med banner"
                },
                "countdown": {
                    "bannerDesign": "Design af banner",
                    "warningTitle": "Banner-overlejring fundet",
                    "warningMessage": "Dette banner vises på en side, hvor der allerede er et banner af denne type. Dette vil medføre krænkelser i bannernes arbejde. Gennemgå sårbarhederne, og reparer dem",
                    "reason": "Sårbarhed:",
                    "settings": "Indstillinger"
                },
                "success": {
                    "mainHeading": "Tillykke!",
                    "messageTimer": "Du har oprettet en nedtælling timer.Nu, vent venligst et par dage, og din indkomst vil blive øget med 25%.",
                    "messageBanner": "Du har oprettet et produkt skiltning. Vent et par dage, og din indkomst vil blive øget med 15%.",
                    "messagePopup": "Du har oprettet et modal vindue.Vent nu et par dage, og din indkomst vil blive øget med 20%.",
                    "button": "Hjem"
                },
                "mainScreen": {
                    "secondPageMainSign": "Dine bannere:",
                    "createNew": "Opret en ny",
                    "createBanner": "Opret banner",
                    "hereIsNo": "Banner af denne type er endnu ikke oprettet",
                    "toastMessage": "Banner fjernet"
                }
            }
            },
        {
            locale: 'es',
            strings: {
                "bannerInfo": {
                    "bannerName": "Nombre del banner:",
                    "goToConfig": "Ir a Configuración"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Seleccione el elemento con el que desea aumentar sus ingresos.",
                    "countdownTimerBar": "Panel Temporizador de cuenta atrás",
                    "countdownDescription": "Un temporizador de cuenta atrás especial que se puede mostrar en un producto u otras páginas significa que la venta ha comenzado!",
                    "countdownRevenue": "Aproximadamente 20% más de ingresos",
                    "saleBanner": "Señal publicitario",
                    "saleBannerDescription": "Un signo increíble que resaltará la singularidad de sus productos.",
                    "saleBannerRevenue": "Aproximadamente 25% más de ingresos",
                    "animationBanner": "Ventana modal con animación",
                    "animationDescription": "Animación de regalo a sus clientes!",
                    "animationRevenue": "Aproximadamente 15% más de ingresos",
                    "continue": "Continuar"
                },
                "design": {
                    "timerDesign": "Diseño del temporizador",
                    "backgroundColor": "Color de fondo:",
                    "bannerHeight": "Altura del banner",
                    "borderWidth": "Ancho de contorno:",
                    "borderColor": "Color del borde",
                    "bannerTexts": "Textos de banner:",
                    "firstText": "Primer texto",
                    "pleaseEnterText": "Por favor, introduzca el texto",
                    "secondText": "Segundo texto",
                    "discountLink": "Enlace de descuento",
                    "title": "Titular",
                    "link": "Referencia:"
                },
                "initPage": {
                    "mainHeader": "Banner de cuenta atrás TopSale",
                    "subheader": "Aumenta las ventas con temporizador de cuenta atrás, animaciones y banners impresionantes",
                    "button": "Crear banner"
                },
                "preview": {
                    "bannerPreview": "Vista previa",
                    "days": "Días",
                    "hours": "Horas",
                    "minutes": "Acta",
                    "seconds": "Segundos"
                },
                "primary": {
                    "enterName": "Escriba un nombre...",
                    "pleaseEnterName": "Por favor, introduzca el nombre",
                    "startDate": "Fecha de inicio",
                    "endDate": "Fecha de finalización",
                    "timerDisplay": "Pantalla del temporizador",
                    "banner": "Pancarta",
                    "widget": "Widget",
                    "timerPosition": "Posición del temporizador en la página",
                    "top": "Arriba",
                    "displaysTimerTop": "Muestra el temporizador en la parte superior de la tienda.",
                    "bottom": "Fondo",
                    "displaysTimerBottom": "Muestra el temporizador en la parte inferior de la tienda.",
                    "displaySticky": "Pantalla anclada",
                    "pagesShown": "Páginas en las que se muestra el temporizador",
                    "all": "Todos",
                    "displayAtAll": "Muestra el temporizador en todas las páginas.",
                    "collections": "Colecciones",
                    "displayAtCollections": "Muestra un temporizador en páginas específicas de colecciones.",
                    "browseCollections": "Descargar colecciones",
                    "pickAllCollections": "Seleccionar todas las colecciones",
                    "products": "Bienes",
                    "displayAtProducts": "Muestra un temporizador en páginas de productos específicas.",
                    "browseProducts": "Descargar productos",
                    "cancel": "Cancelar",
                    "pickAllProducts": "Seleccionar todos los productos",
                    "widgetDescription": "Descripción del widget",
                    "widgetDescriptionText": "Temporizador compacto disponible sólo en las páginas de productos.",
                    "widgetPlacement": "Ubicación del widget",
                    "aboveTitle": "Por encima del titular",
                    "belowTitle": "Bajo el epígrafe",
                    "abovePrice": "Por encima del precio",
                    "belowPrice": "Por debajo del precio",
                    "aboveBuyButton": "Encima del botón «Comprar»",
                    "belowBuyButton": "Bajo el botón «Comprar»",
                    "productPagesWithTimer": "Páginas de productos con temporizador",
                    "utils": "Servicios públicos",
                    "repeat": "Repita el temporizador cuando termine"
                },
                "existing_config": {
                    "existingCountdownTimer": "Temporizador de cuenta atrás existente:",
                    "existingBadgeBanner": "Banner existente",
                    "existingAnimationPopup": "Ventana de animación modal existente:",
                    "actions": "Acciones:",
                    "timer": "Temporizador",
                    "edit": "Editar",
                    "delete": "Desinstalar"
                },
                "animations": {
                    "customize": "Personaliza tu ventana modal!",
                    "save": "Guardar",
                    "pickAnimation": "Seleccionar animación",
                    "messageText": "Su mensaje:",
                    "enterText": "Introducir texto...",
                    "productPagesWithPopup": "Páginas de productos con ventana modal:",
                    "preview": "Vista previa de ventana modal"
                },
                "badges": {
                    "pickCategory": "Seleccione una categoría",
                    "category": "Categoría:",
                    "pickBadge": "Seleccione un icono",
                    "bannerPlacement": "Colocación de banners",
                    "productPagesWithBanner": "Páginas de productos con banner"
                },
                "countdown": {
                    "bannerDesign": "Diseño de banner",
                    "warningTitle": "Superposición de banner detectada",
                    "warningMessage": "Este banner se mostrará en una página donde ya hay un banner de este tipo. Esto causará violaciones en el trabajo de los banners. Revise las vulnerabilidades y repararlas",
                    "reason": "Vulnerabilidad",
                    "settings": "Configuración"
                },
                "success": {
                    "mainHeading": "Felicidades!",
                    "messageTimer": "Usted ha creado un temporizador de cuenta regresiva. Ahora, por favor, espere unos días y sus ingresos se incrementarán en un 25%.",
                    "messageBanner": "Ha creado una señalización de producto. Ahora, por favor espere unos días y sus ingresos se incrementarán en un 15%.",
                    "messagePopup": "Usted ha creado una ventana modal.Ahora, por favor, espere unos días y sus ingresos se incrementarán en un 20%.",
                    "button": "Casa"
                },
                "mainScreen": {
                    "secondPageMainSign": "Tus banners:",
                    "createNew": "Crear un nuevo",
                    "createBanner": "Crear banner",
                    "hereIsNo": "El banner de este tipo aún no se ha creado",
                    "toastMessage": "Banner eliminado"
                }
            }
        },
        {
            locale: 'fi',
            strings: {
                "bannerInfo": {
                    "bannerName": "Bannerin nimi:",
                    "goToConfig": "Siirry Kokoonpanoon"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Valitse kohde, jolla haluat lisätä tulojasi.",
                    "countdownTimerBar": "Lähtölaskenta Ajastin-paneeli",
                    "countdownDescription": "Erityinen lähtölaskenta ajastin, joka voidaan näyttää tuotteelle tai muille sivuille tarkoittaa, että myynti on alkanut!",
                    "countdownRevenue": "Noin 20 prosenttia enemmän tuloja",
                    "saleBanner": "Mainoskyltti",
                    "saleBannerDescription": "Uskomaton merkki, joka korostaa tuotteidesi ainutlaatuisuutta.",
                    "saleBannerRevenue": "Noin 25% enemmän tuloja",
                    "animationBanner": "Modaali-ikkuna animaatiolla",
                    "animationDescription": "Lahjaanimaatio asiakkaillesi!",
                    "animationRevenue": "Noin 15 prosenttia enemmän tuloja",
                    "continue": "Jatkakaa"
                },
                "design": {
                    "timerDesign": "Ajastimen suunnittelu",
                    "backgroundColor": "Taustan väri:",
                    "bannerHeight": "Bannerin korkeus",
                    "borderWidth": "Rajan leveys:",
                    "borderColor": "Reunan väri",
                    "bannerTexts": "Bannerin tekstit:",
                    "firstText": "Ensimmäinen teksti",
                    "pleaseEnterText": "Ole hyvä ja kirjoita teksti",
                    "secondText": "Toinen teksti",
                    "discountLink": "Alennuslinkki",
                    "title": "Otsikko",
                    "link": "Viite:"
                },
                "initPage": {
                    "mainHeader": "TopSale Lähtölaskenta banneri",
                    "subheader": "Lisätä myyntiä lähtölaskentaajastimella, animaatioilla ja upeilla bannereilla",
                    "button": "Luo banneri"
                },
                "preview": {
                    "bannerPreview": "Preview",
                    "days": "Päiviä",
                    "hours": "Tunteja",
                    "minutes": "Minuutteja",
                    "seconds": "Sekuntia"
                },
                "primary": {
                    "enterName": "Kirjoita nimi...",
                    "pleaseEnterName": "Ole hyvä ja anna nimi",
                    "startDate": "Aloituspäivä",
                    "endDate": "Päättymispäivä",
                    "timerDisplay": "Ajastinnäyttö",
                    "banner": "Banneri",
                    "widget": "Widget",
                    "timerPosition": "Ajastimen sijainti sivulla",
                    "top": "Ylhäältä",
                    "displaysTimerTop": "Näyttää ajastimen myymälän yläosassa.",
                    "bottom": "Pohja",
                    "displaysTimerBottom": "Näyttää ajastimen myymälän alareunassa.",
                    "displaySticky": "Näyttö kiinnitettynä",
                    "pagesShown": "Sivut, joilla ajastin näytetään",
                    "all": "Kaikki",
                    "displayAtAll": "Näyttää ajastimen kaikilla sivuilla.",
                    "collections": "Kokoelmat",
                    "displayAtCollections": "Näyttää ajastimen tietyillä kokoelmien sivuilla.",
                    "browseCollections": "Lataa Kokoelmat",
                    "pickAllCollections": "Valitse kaikki kokoelmat",
                    "products": "Tavaroita",
                    "displayAtProducts": "Näyttää ajastimen tietyillä tuotesivuilla.",
                    "browseProducts": "Lataa tuotteita",
                    "cancel": "Peruuta",
                    "pickAllProducts": "Valitse kaikki tuotteet",
                    "widgetDescription": "Widgetin kuvaus",
                    "widgetDescriptionText": "Kompakti ajastin saatavilla vain tuotesivuilla.",
                    "widgetPlacement": "Widgetin sijainti",
                    "aboveTitle": "Otsikon yläpuolella",
                    "belowTitle": "Otsikon alla",
                    "abovePrice": "Yllä hinta",
                    "belowPrice": "Alle hinnan",
                    "aboveBuyButton": "”Osta” -painikkeen yläpuolella",
                    "belowBuyButton": "Painikkeen alla ”Osta”",
                    "productPagesWithTimer": "Tuotesivut ajastimella",
                    "utils": "Apuohjelmat",
                    "repeat": "Toista ajastin, kun se päättyy"
                },
                "existing_config": {
                    "existingCountdownTimer": "Olemassa oleva lähtölaskentaajastin:",
                    "existingBadgeBanner": "Olemassa oleva banneri",
                    "existingAnimationPopup": "Olemassa oleva modaalisen animaation ikkuna:",
                    "actions": "Toimet:",
                    "timer": "Ajastin",
                    "edit": "Edit",
                    "delete": "Poista asennus"
                },
                "animations": {
                    "customize": "Muokkaa modaali-ikkunaa!",
                    "save": "Säästä",
                    "pickAnimation": "Valitse animaatio",
                    "messageText": "Viestisi:",
                    "enterText": "Kirjoita teksti...",
                    "productPagesWithPopup": "Tuotesivut, joissa on modaali-ikkuna:",
                    "preview": "Modaalisen ikkunan esikatsel"
                },
                "badges": {
                    "pickCategory": "Valitse kategoria",
                    "category": "Luokka:",
                    "pickBadge": "Valitse kuvake",
                    "bannerPlacement": "Bannerin sijoitus",
                    "productPagesWithBanner": "Tuotesivut bannerilla"
                },
                "countdown": {
                    "bannerDesign": "Bannerin suunnittelu",
                    "warningTitle": "Bannerin peitto havaittu",
                    "warningMessage": "Tämä banneri näkyy sivulla, jossa on jo tämäntyyppinen banneri. Tämä aiheuttaa rikkomuksia bannereiden työssä. Tarkista haavoittuvuudet ja korjaa ne",
                    "reason": "Haavoittuvuus:",
                    "settings": "Asetukset"
                },
                "success": {
                    "mainHeading": "Onneksi olkoon!",
                    "messageTimer": "Olet luonut lähtölaskenta ajastin.Now, odota muutama päivä ja tulot lisätään 25%.",
                    "messageBanner": "Olet luonut tuotemerkin. Odottakaa nyt muutama päivä niin tulojasi kasvatetaan 15%.",
                    "messagePopup": "Olet luonut modaalisen ikkuna.Nyt, odota muutama päivä ja tulojasi lisätään 20%.",
                    "button": "Kotiin"
                },
                "mainScreen": {
                    "secondPageMainSign": "Sinun bannerisi:",
                    "createNew": "Luo uusi",
                    "createBanner": "Luo banneri",
                    "hereIsNo": "Tämän tyyppistä banneria ei ole vielä luotu",
                    "toastMessage": "Banneri poistettu"
                }
            }
        },
        {
            locale: 'fr',
            strings: {
                "bannerInfo": {
                    "bannerName": "Nom de la bannière :",
                    "goToConfig": "Aller à la configuration"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Sélectionnez l'élément avec lequel vous souhaitez augmenter votre revenu.",
                    "countdownTimerBar": "Panneau Minuteur Compte à rebours",
                    "countdownDescription": "Un compte à rebours spécial qui peut être affiché sur un produit ou d'autres pages signifie que la vente a commencé !",
                    "countdownRevenue": "Environ 20% de revenus en plus",
                    "saleBanner": "Panneau publicitaire",
                    "saleBannerDescription": "Un signe incroyable qui mettra en évidence l'unicité de vos produits.",
                    "saleBannerRevenue": "Environ 25 % de revenus en plus",
                    "animationBanner": "Fenêtre modale avec animation",
                    "animationDescription": "Animation cadeau à vos clients !",
                    "animationRevenue": "Environ 15 % de revenus supplémentaires",
                    "continue": "Continuer"
                },
                "design": {
                    "timerDesign": "Conception de minuterie",
                    "backgroundColor": "Couleur d'arrière-plan :",
                    "bannerHeight": "Hauteur de la bannière",
                    "borderWidth": "Largeur des limites :",
                    "borderColor": "Couleur de la bordure",
                    "bannerTexts": "Textes de bannière :",
                    "firstText": "Premier texte",
                    "pleaseEnterText": "S'il vous plaît entrer le texte",
                    "secondText": "Deuxième texte",
                    "discountLink": "Lien de réduction",
                    "title": "Manchette",
                    "link": "Référence :"
                },
                "initPage": {
                    "mainHeader": "TopSale Bannière de compte à rebours",
                    "subheader": "Augmentez les ventes avec le compte à rebours, les animations et les bannières étonnantes",
                    "button": "Créer une bannière"
                },
                "preview": {
                    "bannerPreview": "Aperçu",
                    "days": "Jours",
                    "hours": "Heures",
                    "minutes": "Procès-Verbal",
                    "seconds": "Secondes"
                },
                "primary": {
                    "enterName": "Entrez un nom...",
                    "pleaseEnterName": "Veuillez saisir le nom",
                    "startDate": "Date de début",
                    "endDate": "Date de fin",
                    "timerDisplay": "Affichage du minuteur",
                    "banner": "Bannière",
                    "widget": "Widget",
                    "timerPosition": "Position du minuteur sur page",
                    "top": "En haut",
                    "displaysTimerTop": "Affiche la minuterie en haut du magasin.",
                    "bottom": "Bas",
                    "displaysTimerBottom": "Affiche la minuterie au bas du magasin.",
                    "displaySticky": "Affichage épinglé",
                    "pagesShown": "Pages sur lesquelles le minuteur est affiché",
                    "all": "Tous",
                    "displayAtAll": "Affiche le minuteur sur toutes les pages.",
                    "collections": "Collections",
                    "displayAtCollections": "Affiche un minuteur sur des pages de collections spécifiques.",
                    "browseCollections": "Télécharger les collections",
                    "pickAllCollections": "Sélectionner toutes les collections",
                    "products": "Biens",
                    "displayAtProducts": "Affiche une minuterie sur des pages de produits spécifiques.",
                    "browseProducts": "Télécharger des produits",
                    "cancel": "Annuler",
                    "pickAllProducts": "Sélectionnez tous les produits",
                    "widgetDescription": "Description du widget",
                    "widgetDescriptionText": "Minuteur compact disponible uniquement sur les pages produits.",
                    "widgetPlacement": "Emplacement du widget",
                    "aboveTitle": "Au-dessus du titre",
                    "belowTitle": "Sous la rubrique",
                    "abovePrice": "Prix supérieur",
                    "belowPrice": "En dessous du prix",
                    "aboveBuyButton": "Au-dessus du bouton « Acheter »",
                    "belowBuyButton": "Sous le bouton « Acheter »",
                    "productPagesWithTimer": "Pages produit avec minuterie",
                    "utils": "Services publics",
                    "repeat": "Répétez la minuterie quand elle se termine"
                },
                "existing_config": {
                    "existingCountdownTimer": "Minuteur de compte à rebours existant :",
                    "existingBadgeBanner": "Bannière existante",
                    "existingAnimationPopup": "Fenêtre d'animation modale existante :",
                    "actions": "Actions :",
                    "timer": "Minuteur",
                    "edit": "Éditer",
                    "delete": "Désinstaller"
                },
                "animations": {
                    "customize": "Personnalisez votre fenêtre modale !",
                    "save": "Sauvegarder",
                    "pickAnimation": "Sélectionner l'animation",
                    "messageText": "Votre message :",
                    "enterText": "Saisir du texte...",
                    "productPagesWithPopup": "Pages produit avec fenêtre modale :",
                    "preview": "Aperçu de la fenêtre modale"
                },
                "badges": {
                    "pickCategory": "Sélectionner une catégorie",
                    "category": "Catégorie :",
                    "pickBadge": "Sélectionner une icône",
                    "bannerPlacement": "Placement des bannières",
                    "productPagesWithBanner": "Pages produit avec bannière"
                },
                "countdown": {
                    "bannerDesign": "Conception de bannière",
                    "warningTitle": "Superposition de bannière détectée",
                    "warningMessage": "Cette bannière sera affichée sur une page où il y a déjà une bannière de ce type. Cela provoquera des violations dans le travail des bannières. Veuillez vérifier les vulnérabilités et les corriger",
                    "reason": "Vulnérabilité",
                    "settings": "Paramètres"
                },
                "success": {
                    "mainHeading": "Félicitations !",
                    "messageTimer": "Vous avez créé un compte à rebours. Maintenant, s'il vous plaît attendre quelques jours et votre revenu sera augmenté de 25%.",
                    "messageBanner": "Vous avez créé une signalisation de produit. Maintenant, veuillez patienter quelques jours et votre revenu sera augmenté de 15%.",
                    "messagePopup": "Vous avez créé une fenêtre modale.Maintenant, s'il vous plaît patienter quelques jours et votre revenu sera augmenté de 20%.",
                    "button": "Accueil"
                },
                "mainScreen": {
                    "secondPageMainSign": "Vos bannières :",
                    "createNew": "Créer un nouveau",
                    "createBanner": "Créer une bannière",
                    "hereIsNo": "Bannière de ce type n'a pas encore été créée",
                    "toastMessage": "Bannière supprimée"
                }
            }
        },
        {
            locale: 'hi',
            strings: {
                "bannerInfo": {
                    "bannerName": "बैनर नामः",
                    "goToConfig": "कॉन्फ़िगरेशन पर जाएँ"
                },
                "bannerVariants": {
                    "secondPageMainSign": "उस आइटम का चयन करें जिसके साथ आप अपनी आय बढ़ाना चाहते हैं।",
                    "countdownTimerBar": "उलटी गिनती टाइमर पैनल",
                    "countdownDescription": "एक विशेष उलटी गिनती टाइमर जिसे किसी उत्पाद या अन्य पृष्ठों पर प्रदर्शित किया जा सकता है, इसका मतलब है कि बिक्री शुरू हो गई है!",
                    "countdownRevenue": "लगभग 20% अधिक राजस्व",
                    "saleBanner": "विज्ञापन पर हस्ताक्षर",
                    "saleBannerDescription": "एक अविश्वसनीय संकेत जो आपके उत्पादों की विशिष्टता को उजागर करेगा।",
                    "saleBannerRevenue": "लगभग 25% अधिक राजस्व",
                    "animationBanner": "एनीमेशन के साथ मॉडल विंडो",
                    "animationDescription": "अपने ग्राहकों के लिए उपहार एनीमेशन!",
                    "animationRevenue": "लगभग 15% अधिक राजस्व",
                    "continue": "जारी रखें"
                },
                "design": {
                    "timerDesign": "टाइमर डिजाइन",
                    "backgroundColor": "पृष्ठभूमि रंग:",
                    "bannerHeight": "बैनर ऊंचाई",
                    "borderWidth": "सीमा चौड़ाई:",
                    "borderColor": "बॉर्डर रंग",
                    "bannerTexts": "बैनर ग्रंथ:",
                    "firstText": "पहला पाठ",
                    "pleaseEnterText": "कृपया पाठ दर्ज करें",
                    "secondText": "दूसरा पाठ",
                    "discountLink": "डिस्काउंट लिंक",
                    "title": "शीर्षक",
                    "link": "संदर्भ:"
                },
                "initPage": {
                    "mainHeader": "TopSale उलटी गिनती बैनर",
                    "subheader": "उलटी गिनती टाइमर के साथ बिक्री में वृद्धि, एनिमेशन और तेजस्वी बैनर",
                    "button": "बैनर बनाएँ"
                },
                "preview": {
                    "bannerPreview": "पूर्वावलोकन",
                    "days": "दिन",
                    "hours": "घंटे",
                    "minutes": "मिनट",
                    "seconds": "सेकंड्स"
                },
                "primary": {
                    "enterName": "एक नाम भरें...",
                    "pleaseEnterName": "कृपया नाम भरें",
                    "startDate": "प्रारंभ तारीख़",
                    "endDate": "समाप्ति तारीख़",
                    "timerDisplay": "टाइमर प्रदर्शन",
                    "banner": "बैनर",
                    "widget": "विजेट",
                    "timerPosition": "पृष्ठ पर टाइमर स्थिति",
                    "top": "शीर्ष",
                    "displaysTimerTop": "स्टोर के शीर्ष पर टाइमर प्रदर्शित करता है।",
                    "bottom": "नीचे",
                    "displaysTimerBottom": "स्टोर के नीचे टाइमर प्रदर्शित करता है।",
                    "displaySticky": "डिस्प्ले पिन किया गया",
                    "pagesShown": "जिन पृष्ठों पर टाइमर प्रदर्शित होता है",
                    "all": "सब कुछ",
                    "displayAtAll": "सभी पृष्ठों पर टाइमर प्रदर्शित करता है।",
                    "collections": "संग्रह",
                    "displayAtCollections": "विशिष्ट संग्रह पृष्ठों पर एक टाइमर प्रदर्शित करता है।",
                    "browseCollections": "संग्रह डाउनलोड करें",
                    "pickAllCollections": "सभी संग्रहों को चुनें",
                    "products": "माल",
                    "displayAtProducts": "विशिष्ट उत्पाद पृष्ठों पर एक टाइमर प्रदर्शित करता है।",
                    "browseProducts": "उत्पादों को डाउनलोड करें",
                    "cancel": "रद्द करें",
                    "pickAllProducts": "सभी उत्पादों का चयन करें",
                    "widgetDescription": "विजेट विवरण",
                    "widgetDescriptionText": "कॉम्पैक्ट टाइमर केवल उत्पाद पृष्ठों पर उपलब्ध है।",
                    "widgetPlacement": "विजेट स्थान",
                    "aboveTitle": "शीर्षक के ऊपर",
                    "belowTitle": "शीर्षक के तहत",
                    "abovePrice": "ऊपर की कीमत",
                    "belowPrice": "कीमत के नीचे",
                    "aboveBuyButton": "“खरीदें” बटन के ऊपर",
                    "belowBuyButton": "बटन के तहत “खरीदें”",
                    "productPagesWithTimer": "टाइमर के साथ उत्पाद पेज",
                    "utils": "उपयोगिताएँ",
                    "repeat": "टाइमर को समाप्त होने पर दोहराएं"
                },
                "existing_config": {
                    "existingCountdownTimer": "मौजूदा उलटी गिनती टाइमर:",
                    "existingBadgeBanner": "मौजूदा बैनर",
                    "existingAnimationPopup": "मौजूदा मोडल एनीमेशन विंडो:",
                    "actions": "क्रियाएँ:",
                    "timer": "टाइमर",
                    "edit": "संपादित करें",
                    "delete": "स्थापना रद्द करें"
                },
                "animations": {
                    "customize": "अपनी मोडल विंडो को अनुकूलित करें!",
                    "save": "बचाना",
                    "pickAnimation": "ऐनिमेशन चुनें",
                    "messageText": "आपका संदेश:",
                    "enterText": "पाठ भरें...",
                    "productPagesWithPopup": "मोडल विंडो के साथ उत्पाद पृष्ठ:",
                    "preview": "मॉडल विंडो पूर्वावलोकन"
                },
                "badges": {
                    "pickCategory": "एक श्रेणी का चयन करें",
                    "category": "श्रेणी:",
                    "pickBadge": "एक आइकन चुनें",
                    "bannerPlacement": "बैनर प्लेसमेंट",
                    "productPagesWithBanner": "बैनर के साथ उत्पाद पेज"
                },
                "countdown": {
                    "bannerDesign": "बैनर डिजाइन",
                    "warningTitle": "बैनर ओवरले का पता चला",
                    "warningMessage": "यह बैनर उस पृष्ठ पर प्रदर्शित किया जाएगा जहां पहले से ही इस प्रकार का बैनर है। इससे बैनर के काम में उल्लंघन होगा। कृपया कमजोरियों की समीक्षा करें और उन्हें ठीक करें",
                    "reason": "भेद्यता:",
                    "settings": "सेटिंग्स"
                },
                "success": {
                    "mainHeading": "बधाई हो!",
                    "messageTimer": "आपने उलटी गिनती टाइमर बनाया है। अब, कृपया कुछ दिनों तक प्रतीक्षा करें और आपकी आय में 25% की वृद्धि होगी।",
                    "messageBanner": "आपने उत्पाद साइनेज बनाया है। अब, कृपया कुछ दिनों तक प्रतीक्षा करें और आपकी आय में 15% की वृद्धि होगी।",
                    "messagePopup": "आपने एक मोडल विंडो बनाई है। अब, कृपया कुछ दिनों तक प्रतीक्षा करें और आपकी आय 20% की वृद्धि होगी।",
                    "button": "घर"
                },
                "mainScreen": {
                    "secondPageMainSign": "आपके बैनर:",
                    "createNew": "एक नया बनाएँ",
                    "createBanner": "बैनर बनाएँ",
                    "hereIsNo": "इस प्रकार का बैनर अभी तक नहीं बनाया गया है",
                    "toastMessage": "बैनर हटाया"
                }
            }
        },
        {
            locale: 'it',
            strings: {
                "bannerInfo": {
                    "bannerName": "Nome banner:",
                    "goToConfig": "Vai alla configurazione"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Seleziona l'elemento con cui desideri aumentare il tuo reddito.",
                    "countdownTimerBar": "Pannello Timer conto alla rovescia",
                    "countdownDescription": "Un conto alla rovescia speciale che può essere visualizzato su un prodotto o altre pagine significa che la vendita è iniziata!",
                    "countdownRevenue": "Circa il 20% in più di fatturato",
                    "saleBanner": "Segnale pubblicitario",
                    "saleBannerDescription": "Un segno incredibile che metterà in risalto l'unicità dei tuoi prodotti.",
                    "saleBannerRevenue": "Circa il 25% in più di fatturato",
                    "animationBanner": "Finestra modale con animazione",
                    "animationDescription": "Animazione regalo per i tuoi clienti!",
                    "animationRevenue": "Circa il 15% in più di entrate",
                    "continue": "Continua"
                },
                "design": {
                    "timerDesign": "Design con timer",
                    "backgroundColor": "Colore di sfondo:",
                    "bannerHeight": "Altezza Banner",
                    "borderWidth": "Larghezza limite:",
                    "borderColor": "Colore bordo",
                    "bannerTexts": "Testi banner:",
                    "firstText": "Primo testo",
                    "pleaseEnterText": "Inserisci il testo",
                    "secondText": "Secondo testo",
                    "discountLink": "Link sconto",
                    "title": "Titolo",
                    "link": "Riferimento:"
                },
                "initPage": {
                    "mainHeader": "Banner conto alla rovescia TopSale",
                    "subheader": "Aumenta le vendite con il conto alla rovescia, le animazioni e i fantastici banner",
                    "button": "Crea banner"
                },
                "preview": {
                    "bannerPreview": "Anteprima",
                    "days": "Giorni",
                    "hours": "Ore",
                    "minutes": "Minuti",
                    "seconds": "Secondi"
                },
                "primary": {
                    "enterName": "Inserisci un nome...",
                    "pleaseEnterName": "Inserisci il nome",
                    "startDate": "Data di inizio",
                    "endDate": "Data di fine",
                    "timerDisplay": "Display timer",
                    "banner": "Banner",
                    "widget": "Widget",
                    "timerPosition": "Posizione del timer sulla pagina",
                    "top": "In alto",
                    "displaysTimerTop": "Visualizza il timer nella parte superiore del negozio.",
                    "bottom": "Fondo",
                    "displaysTimerBottom": "Visualizza il timer nella parte inferiore del negozio.",
                    "displaySticky": "Visualizzazione bloccata",
                    "pagesShown": "Pagine su cui viene visualizzato il timer",
                    "all": "Tutti",
                    "displayAtAll": "Visualizza il timer su tutte le pagine.",
                    "collections": "Collezioni",
                    "displayAtCollections": "Visualizza un timer su pagine di raccolte specifiche.",
                    "browseCollections": "Scarica le collezioni",
                    "pickAllCollections": "Seleziona tutte le raccolte",
                    "products": "Merci",
                    "displayAtProducts": "Visualizza un timer su pagine di prodotto specifiche.",
                    "browseProducts": "Scarica i prodotti",
                    "cancel": "Annulla",
                    "pickAllProducts": "Seleziona tutti i prodotti",
                    "widgetDescription": "Descrizione del widget",
                    "widgetDescriptionText": "Timer compatto disponibile solo sulle pagine dei prodotti.",
                    "widgetPlacement": "Posizione widget",
                    "aboveTitle": "Sopra il titolo",
                    "belowTitle": "Sotto il titolo",
                    "abovePrice": "Sopra il prezzo",
                    "belowPrice": "Sotto il prezzo",
                    "aboveBuyButton": "Sopra il pulsante «Acquista»",
                    "belowBuyButton": "Sotto il pulsante «Acquista»",
                    "productPagesWithTimer": "Pagine prodotto con timer",
                    "utils": "Utilità",
                    "repeat": "Ripetere il timer al termine"
                },
                "existing_config": {
                    "existingCountdownTimer": "Timer conto alla rovescia esistente:",
                    "existingBadgeBanner": "Banner esistente",
                    "existingAnimationPopup": "Finestra di animazione modale esistente:",
                    "actions": "Azioni:",
                    "timer": "Timer",
                    "edit": "Modifica",
                    "delete": "Disinstalla"
                },
                "animations": {
                    "customize": "Personalizza la tua finestra modale!",
                    "save": "Salvare",
                    "pickAnimation": "Seleziona animazione",
                    "messageText": "Il tuo messaggio:",
                    "enterText": "Inserisci testo...",
                    "productPagesWithPopup": "Pagine prodotto con finestra modale:",
                    "preview": "Anteprima finestra modale"
                },
                "badges": {
                    "pickCategory": "Seleziona una categoria",
                    "category": "Categoria:",
                    "pickBadge": "Seleziona un'icona",
                    "bannerPlacement": "Posizionamento banner",
                    "productPagesWithBanner": "Pagine prodotto con banner"
                },
                "countdown": {
                    "bannerDesign": "Design Banner",
                    "warningTitle": "Sovrapposizione banner rilevata",
                    "warningMessage": "Questo banner verrà visualizzato su una pagina in cui è già presente un banner di questo tipo. Ciò causerà violazioni nel lavoro degli striscioni. Esaminare le vulnerabilità e correggerle",
                    "reason": "Vulnerabilità:",
                    "settings": "Impostazioni"
                },
                "success": {
                    "mainHeading": "Congratulazioni!",
                    "messageTimer": "Hai creato un conto alla rovescia.Ora, si prega di attendere qualche giorno e il vostro reddito sarà aumentato del 25%.",
                    "messageBanner": "È stata creata una segnaletica prodotto. Ora, per favore, attendi qualche giorno e il tuo reddito sarà aumentato del 15%.",
                    "messagePopup": "Hai creato una finestra modale.Ora, si prega di attendere qualche giorno e il vostro reddito sarà aumentato del 20%.",
                    "button": "Casa"
                },
                "mainScreen": {
                    "secondPageMainSign": "I tuoi striscioni:",
                    "createNew": "Crea un nuovo",
                    "createBanner": "Crea banner",
                    "hereIsNo": "Banner di questo tipo non è ancora stato creato",
                    "toastMessage": "Banner rimosso"
                }
            }
        },
        {
            locale: 'ko',
            strings: {
                "bannerInfo": {
                    "bannerName": "배너 이름:",
                    "goToConfig": "구성으로 이동"
                },
                "bannerVariants": {
                    "secondPageMainSign": "수입을 늘리려는 항목을 선택하십시오.",
                    "countdownTimerBar": "카운트다운 타이머 패널",
                    "countdownDescription": "제품이나 다른 페이지에 표시할 수 있는 특별한 카운트다운 타이머는 판매가 시작되었음을 의미합니다!",
                    "countdownRevenue": "약 20% 더 많은 수익",
                    "saleBanner": "광고 표지판",
                    "saleBannerDescription": "제품의 독창성을 강조하는 놀라운 기호.",
                    "saleBannerRevenue": "약 25% 더 많은 수익",
                    "animationBanner": "애니메이션이 있는 모달 창",
                    "animationDescription": "고객에게 선물 애니메이션!",
                    "animationRevenue": "약 15% 더 많은 수익",
                    "continue": "계속합니다"
                },
                "design": {
                    "timerDesign": "타이머 설계",
                    "backgroundColor": "배경 색상:",
                    "bannerHeight": "배너 높이",
                    "borderWidth": "경계 폭:",
                    "borderColor": "테두리 색상",
                    "bannerTexts": "배너 텍스트:",
                    "firstText": "첫 번째 텍스트",
                    "pleaseEnterText": "텍스트를 입력하십시오",
                    "secondText": "두 번째 텍스트",
                    "discountLink": "할인 링크",
                    "title": "헤드라인",
                    "link": "참조:"
                },
                "initPage": {
                    "mainHeader": "탑세일 카운트다운 배너",
                    "subheader": "카운트다운 타이머, 애니메이션, 멋진 배너로 매출 증대",
                    "button": "배너 만들기"
                },
                "preview": {
                    "bannerPreview": "미리 보기",
                    "days": "일",
                    "hours": "시간",
                    "minutes": "몇 분",
                    "seconds": "초"
                },
                "primary": {
                    "enterName": "이름 입력...",
                    "pleaseEnterName": "이름을 입력하십시오",
                    "startDate": "시작 날짜",
                    "endDate": "종료 날짜",
                    "timerDisplay": "타이머 표시",
                    "banner": "배너",
                    "widget": "위젯",
                    "timerPosition": "페이지의 타이머 위치",
                    "top": "맨 위",
                    "displaysTimerTop": "매장 상단에 타이머를 표시합니다.",
                    "bottom": "맨 아래",
                    "displaysTimerBottom": "매장 하단에 타이머를 표시합니다.",
                    "displaySticky": "고정 표시",
                    "pagesShown": "타이머가 표시되는 페이지",
                    "all": "모두",
                    "displayAtAll": "모든 페이지에 타이머를 표시합니다.",
                    "collections": "컬렉션",
                    "displayAtCollections": "특정 컬렉션 페이지에 타이머를 표시합니다.",
                    "browseCollections": "컬렉션 다운로드",
                    "pickAllCollections": "모든 컬렉션 선택",
                    "products": "상품",
                    "displayAtProducts": "특정 제품 페이지에 타이머를 표시합니다.",
                    "browseProducts": "제품 다운로드",
                    "cancel": "취소",
                    "pickAllProducts": "모든 제품 선택",
                    "widgetDescription": "위젯 설명",
                    "widgetDescriptionText": "컴팩트 타이머는 제품 페이지에서만 사용할 수 있습니다.",
                    "widgetPlacement": "위젯 위치",
                    "aboveTitle": "헤드라인 위",
                    "belowTitle": "제목 아래",
                    "abovePrice": "이상 가격",
                    "belowPrice": "가격 아래",
                    "aboveBuyButton": "“구매” 버튼 위",
                    "belowBuyButton": "버튼 아래 “구매”",
                    "productPagesWithTimer": "타이머가 있는 상품 페이지",
                    "utils": "유틸리티",
                    "repeat": "타이머가 끝나면 반복하십시오."
                },
                "existing_config": {
                    "existingCountdownTimer": "기존 카운트다운 타이머:",
                    "existingBadgeBanner": "기존 배너",
                    "existingAnimationPopup": "기존 모달 애니메이션 창:",
                    "actions": "작업:",
                    "timer": "타이머",
                    "edit": "편집",
                    "delete": "설치 제거"
                },
                "animations": {
                    "customize": "모달 창을 사용자 정의하십시오!",
                    "save": "저장합니다",
                    "pickAnimation": "애니메이션 선택",
                    "messageText": "귀하의 메시지:",
                    "enterText": "텍스트 입력...",
                    "productPagesWithPopup": "모달 창이 있는 제품 페이지:",
                    "preview": "모달 창 미리보기"
                },
                "badges": {
                    "pickCategory": "카테고리 선택",
                    "category": "카테고리:",
                    "pickBadge": "아이콘을 선택합니다.",
                    "bannerPlacement": "배너 배치",
                    "productPagesWithBanner": "배너가 있는 상품 페이지"
                },
                "countdown": {
                    "bannerDesign": "배너 디자인",
                    "warningTitle": "배너 오버레이 감지",
                    "warningMessage": "이 배너는 이미이 유형의 배너가있는 페이지에 표시됩니다.이렇게하면 배너 작업에 위반이 발생합니다.취약성을 검토하고 수정하십시오.",
                    "reason": "취약점:",
                    "settings": "설정"
                },
                "success": {
                    "mainHeading": "축하합니다!",
                    "messageTimer": "당신은 카운트 다운 타이머를 만들었습니다. 이제, 며칠을 기다려 주시고 소득은 25% 증가합니다.",
                    "messageBanner": "제품 사이니지를 작성했습니다.이제 며칠을 기다려 주시면 소득이 15% 증가합니다.",
                    "messagePopup": "당신은 모달 창을 만들었습니다. 이제, 며칠을 기다려 주시고 소득은 20% 증가합니다.",
                    "button": "홈"
                },
                "mainScreen": {
                    "secondPageMainSign": "배너:",
                    "createNew": "새로 만들기",
                    "createBanner": "배너 만들기",
                    "hereIsNo": "이 유형의 배너가 아직 생성되지 않았습니다.",
                    "toastMessage": "배너가 제거됨"
                }
            }
        },
        {
            locale: 'nl',
            strings: {
                "bannerInfo": {
                    "bannerName": "Banner naam:",
                    "goToConfig": "Ga naar Configuratie"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Selecteer het item waarmee u uw inkomen wilt verhogen.",
                    "countdownTimerBar": "Paneel Countdown Timer",
                    "countdownDescription": "Een speciale afteltimer die kan worden weergegeven op een product of andere pagina's betekent dat de verkoop is begonnen!",
                    "countdownRevenue": "Ongeveer 20% meer omzet",
                    "saleBanner": "Reclame-teken",
                    "saleBannerDescription": "Een ongelooflijk teken dat het unieke karakter van uw producten zal benadrukken.",
                    "saleBannerRevenue": "Ongeveer 25% meer omzet",
                    "animationBanner": "Modaal venster met animatie",
                    "animationDescription": "Cadeauanimatie aan uw klanten!",
                    "animationRevenue": "Ongeveer 15% meer omzet",
                    "continue": "Ga verder"
                },
                "design": {
                    "timerDesign": "Timer Ontwerp",
                    "backgroundColor": "Achtergrondkleur:",
                    "bannerHeight": "Banner Hoogte",
                    "borderWidth": "Breedte grens:",
                    "borderColor": "Kleur rand",
                    "bannerTexts": "Banner teksten:",
                    "firstText": "Eerste tekst",
                    "pleaseEnterText": "Voer de tekst in",
                    "secondText": "Tweede tekst",
                    "discountLink": "Korting link",
                    "title": "Kop",
                    "link": "Referentie:"
                },
                "initPage": {
                    "mainHeader": "TopSale Countdown Banner",
                    "subheader": "Verhoog de omzet met afteltimer, animaties en verbluffende banners",
                    "button": "Banner maken"
                },
                "preview": {
                    "bannerPreview": "Voorbeeld",
                    "days": "Dagen",
                    "hours": "Uren",
                    "minutes": "Minuten",
                    "seconds": "- Seconden"
                },
                "primary": {
                    "enterName": "Voer een naam in...",
                    "pleaseEnterName": "Voer de naam in",
                    "startDate": "Begindatum",
                    "endDate": "Einddatum",
                    "timerDisplay": "Timer display",
                    "banner": "Vaanier",
                    "widget": "Widget",
                    "timerPosition": "Timer positie op pagina",
                    "top": "- Boven",
                    "displaysTimerTop": "Geeft de timer aan de bovenkant van de winkel weer.",
                    "bottom": "Bodem",
                    "displaysTimerBottom": "Geeft de timer aan de onderkant van de winkel weer.",
                    "displaySticky": "Weergave vastgemaakt",
                    "pagesShown": "Pagina's waarop de timer wordt weergegeven",
                    "all": "Allemaal",
                    "displayAtAll": "Hiermee geeft u de timer weer op alle pagina's.",
                    "collections": "Collecties",
                    "displayAtCollections": "Geeft een timer weer op specifieke verzamelingspagina's.",
                    "browseCollections": "Verzamelingen downloaden",
                    "pickAllCollections": "Alle collecties selecteren",
                    "products": "Goederen",
                    "displayAtProducts": "Geeft een timer weer op specifieke productpagina's.",
                    "browseProducts": "Download producten",
                    "cancel": "Annuleren",
                    "pickAllProducts": "Selecteer alle producten",
                    "widgetDescription": "Widget Beschrijving",
                    "widgetDescriptionText": "Compacte timer alleen beschikbaar op productpagina's.",
                    "widgetPlacement": "Widget Locatie",
                    "aboveTitle": "Boven de kop",
                    "belowTitle": "Onder de rubriek",
                    "abovePrice": "Boven prijs",
                    "belowPrice": "Onder de prijs",
                    "aboveBuyButton": "Boven de knop „Kopen”",
                    "belowBuyButton": "Onder de knop „Kopen”",
                    "productPagesWithTimer": "Productpagina's met timer",
                    "utils": "Hulpprogramma's",
                    "repeat": "Herhaal de timer wanneer deze eindigt"
                },
                "existing_config": {
                    "existingCountdownTimer": "Bestaande afteltimer:",
                    "existingBadgeBanner": "Bestaande banner",
                    "existingAnimationPopup": "Bestaande modale animatie venster:",
                    "actions": "Acties:",
                    "timer": "Timer",
                    "edit": "Bewerken",
                    "delete": "Verwijderen"
                },
                "animations": {
                    "customize": "Pas uw modale venster aan!",
                    "save": "Opslaan",
                    "pickAnimation": "Animatie selecteren",
                    "messageText": "Uw bericht:",
                    "enterText": "Tekst invoeren...",
                    "productPagesWithPopup": "Productpagina's met modaal venster:",
                    "preview": "Voorbeeld modaal venster"
                },
                "badges": {
                    "pickCategory": "Selecteer een categorie",
                    "category": "Categorie:",
                    "pickBadge": "Selecteer een pictogram",
                    "bannerPlacement": "Banner plaatsing",
                    "productPagesWithBanner": "Productpagina's met banner"
                },
                "countdown": {
                    "bannerDesign": "Banner Ontwerp",
                    "warningTitle": "Banner overlay gedetecteerd",
                    "warningMessage": "Deze banner wordt weergegeven op een pagina waar al een banner van dit type is. Dit veroorzaakt schendingen in het werk van de banners. Controleer de kwetsbaarheden en verhelp ze",
                    "reason": "Kwetsbaarheid:",
                    "settings": "Instellingen"
                },
                "success": {
                    "mainHeading": "Proficiat!",
                    "messageTimer": "U hebt een countdown timer gemaakt.Nu, wacht een paar dagen en uw inkomen zal worden verhoogd met 25%.",
                    "messageBanner": "U hebt een product signage gemaakt. Wacht een paar dagen en uw inkomen zal met 15% worden verhoogd.",
                    "messagePopup": "U hebt een modaal venster gemaakt.Nu, wacht een paar dagen en uw inkomen zal worden verhoogd met 20%.",
                    "button": "Naar huis"
                },
                "mainScreen": {
                    "secondPageMainSign": "Uw banners:",
                    "createNew": "Maak een nieuwe",
                    "createBanner": "Banner maken",
                    "hereIsNo": "Banner van dit type is nog niet aangemaakt",
                    "toastMessage": "Banner verwijderd"
                }
            }
        },
        {
            locale: 'no',
            strings: {
                "bannerInfo": {
                    "bannerName": "Banner navn:",
                    "goToConfig": "Gå til Konfigurasjon"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Velg elementet som du vil øke inntekten din med.",
                    "countdownTimerBar": "Nedtellingstidtak",
                    "countdownDescription": "En spesiell nedtellingstimer som kan vises på et produkt eller andre sider betyr at salget har startet!",
                    "countdownRevenue": "Ca 20% mer omsetning",
                    "saleBanner": "Reklame skilt",
                    "saleBannerDescription": "Et utrolig tegn som vil fremheve det unike ved produktene dine.",
                    "saleBannerRevenue": "Omtrent 25% mer omsetning",
                    "animationBanner": "Modal vindu med animasjon",
                    "animationDescription": "Gave animasjon til kundene dine!",
                    "animationRevenue": "Omtrent 15% mer omsetning",
                    "continue": "Fortsett"
                },
                "design": {
                    "timerDesign": "Timer Design",
                    "backgroundColor": "Bakgrunnsfarge:",
                    "bannerHeight": "Bannerhøyde",
                    "borderWidth": "Grensebredde:",
                    "borderColor": "Border farge",
                    "bannerTexts": "Bannertekster:",
                    "firstText": "Første tekst",
                    "pleaseEnterText": "Vennligst skriv inn teksten",
                    "secondText": "Andre tekst",
                    "discountLink": "Rabatt lenke",
                    "title": "Overskrift",
                    "link": "Referanse:"
                },
                "initPage": {
                    "mainHeader": "TopSale Countdown Banner",
                    "subheader": "Øk salget med nedtellingstimer, animasjoner og fantastiske bannere",
                    "button": "Opprett banner"
                },
                "preview": {
                    "bannerPreview": "Forhåndsvisning",
                    "days": "Dager",
                    "hours": "Timer",
                    "minutes": "Minutter",
                    "seconds": "Sekunder"
                },
                "primary": {
                    "enterName": "Skriv inn et navn...",
                    "pleaseEnterName": "Vennligst skriv inn navnet",
                    "startDate": "Startdato",
                    "endDate": "Sluttdato",
                    "timerDisplay": "Visning av timer",
                    "banner": "Banner",
                    "widget": "Widget",
                    "timerPosition": "Tidtakerposisjon på side",
                    "top": "Topp",
                    "displaysTimerTop": "Viser tidtakeren øverst i butikken.",
                    "bottom": "Bunn",
                    "displaysTimerBottom": "Viser tidtakeren nederst i butikken.",
                    "displaySticky": "Skjerm festet",
                    "pagesShown": "Sider, hvor timeren vises",
                    "all": "Alle",
                    "displayAtAll": "Viser tidtakeren på alle sider.",
                    "collections": "Samlinger",
                    "displayAtCollections": "Viser en tidtaker på bestemte samlinger sider.",
                    "browseCollections": "Last ned samlinger",
                    "pickAllCollections": "Velg alle samlinger",
                    "products": "Varer",
                    "displayAtProducts": "Viser en tidtaker på bestemte produktsider.",
                    "browseProducts": "Last ned produkter",
                    "cancel": "Avbryt",
                    "pickAllProducts": "Velg alle produkter",
                    "widgetDescription": "Beskrivelse av widget",
                    "widgetDescriptionText": "Kompakt timer kun tilgængelig på produktsider.",
                    "widgetPlacement": "Plassering av widget",
                    "aboveTitle": "Over overskriften",
                    "belowTitle": "Under overskriften",
                    "abovePrice": "Ovenfor pris",
                    "belowPrice": "Under prisen",
                    "aboveBuyButton": "Over «Kjøp» -knappen",
                    "belowBuyButton": "Under knappen «Kjøp»",
                    "productPagesWithTimer": "Produktsider med timer",
                    "utils": "Verktøy",
                    "repeat": "Gjenta tidtakeren når den slutter"
                },
                "existing_config": {
                    "existingCountdownTimer": "Eksisterende nedtelling Timer:",
                    "existingBadgeBanner": "Eksisterende banner",
                    "existingAnimationPopup": "Eksisterende modal animasjonsvindu:",
                    "actions": "Handlinger:",
                    "timer": "Tidtaker",
                    "edit": "Rediger",
                    "delete": "Avinstaller"
                },
                "animations": {
                    "customize": "Tilpass ditt modale vindu!",
                    "save": "Lagre",
                    "pickAnimation": "Velg animasjon",
                    "messageText": "Din melding:",
                    "enterText": "Skriv inn tekst...",
                    "productPagesWithPopup": "Produktsider med modalt vindu:",
                    "preview": "Modal vindu forhåndsvisning"
                },
                "badges": {
                    "pickCategory": "Velg en kategori",
                    "category": "Kategori:",
                    "pickBadge": "Velg et ikon",
                    "bannerPlacement": "Banner plassering",
                    "productPagesWithBanner": "Produktsider med banner"
                },
                "countdown": {
                    "bannerDesign": "Banner Design",
                    "warningTitle": "Banneroverlegg oppdaget",
                    "warningMessage": "Dette banneret vil bli vist på en side der det allerede er et banner av denne typen. Dette vil føre til brudd på bannernes arbeid. Se gjennom sikkerhetsproblemene og reparer dem",
                    "reason": "Sårbarhet:",
                    "settings": "Innstillinger"
                },
                "success": {
                    "mainHeading": "Gratulerer!",
                    "messageTimer": "Du har opprettet en nedtelling tidtaker.Nå, vennligst vent noen dager, og inntekten din vil bli økt med 25%.",
                    "messageBanner": "Du har opprettet en produktskilting. Vent nå noen dager, og inntektene dine vil bli økt med 15%.",
                    "messagePopup": "Du har opprettet et modalt vindu.Nå, vennligst vent noen dager, og inntekten din vil bli økt med 20%.",
                    "button": "Hjem"
                },
                "mainScreen": {
                    "secondPageMainSign": "Dine bannere:",
                    "createNew": "Opprett en ny",
                    "createBanner": "Opprett banner",
                    "hereIsNo": "Banner av denne typen er ennå ikke opprettet",
                    "toastMessage": "Banner fjernet"
                }
            }
        },
        {
            locale: 'pl',
            strings: {
                "bannerInfo": {
                    "bannerName": "Nazwa banera:",
                    "goToConfig": "Przejdź do konfiguracji"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Wybierz przedmiot, z którym chcesz zwiększyć swój dochód.",
                    "countdownTimerBar": "Panel Timer odliczania",
                    "countdownDescription": "Specjalny zegar odliczania, który może być wyświetlany na produkcie lub innych stronach oznacza, że sprzedaż rozpoczęła się!",
                    "countdownRevenue": "Około 20% więcej przychodów",
                    "saleBanner": "Znak reklamowy",
                    "saleBannerDescription": "Niesamowity znak, który podkreśli wyjątkowość Twoich produktów.",
                    "saleBannerRevenue": "Około 25% więcej przychodów",
                    "animationBanner": "Okno modalne z animacją",
                    "animationDescription": "Animacja prezentów dla klientów!",
                    "animationRevenue": "Około 15% więcej przychodów",
                    "continue": "Kontynuuj"
                },
                "design": {
                    "timerDesign": "Projektowanie timera",
                    "backgroundColor": "Kolor tła:",
                    "bannerHeight": "Wysokość banera",
                    "borderWidth": "Szerokość obwiedni:",
                    "borderColor": "Kolor obramowania",
                    "bannerTexts": "Teksty banerów:",
                    "firstText": "Pierwszy tekst",
                    "pleaseEnterText": "Wprowadź tekst",
                    "secondText": "Drugi tekst",
                    "discountLink": "Link rabatowy",
                    "title": "Nagłówek",
                    "link": "Numer referencyjny:"
                },
                "initPage": {
                    "mainHeader": "Baner do odliczania TopSale",
                    "subheader": "Zwiększ sprzedaż dzięki czasowi odliczania, animacji i oszałamiającym banerom",
                    "button": "Utwórz baner"
                },
                "preview": {
                    "bannerPreview": "Podgląd",
                    "days": "Dni",
                    "hours": "Godziny",
                    "minutes": "Minuty",
                    "seconds": "Sekundy"
                },
                "primary": {
                    "enterName": "Wprowadź nazwę...",
                    "pleaseEnterName": "Podaj nazwę",
                    "startDate": "Data rozpoczęcia",
                    "endDate": "Data zakończenia",
                    "timerDisplay": "Wyświetlacz zegar",
                    "banner": "Sztandaru",
                    "widget": "Widżet",
                    "timerPosition": "Pozycja czasomierza na stronie",
                    "top": "Na górze",
                    "displaysTimerTop": "Wyświetla zegar w górnej części sklepu.",
                    "bottom": "Na dole",
                    "displaysTimerBottom": "Wyświetla licznik czasu na dole sklepu.",
                    "displaySticky": "Wyświetl przypięty",
                    "pagesShown": "Strony, na których wyświetlany jest zegar",
                    "all": "Wszystkich",
                    "displayAtAll": "Wyświetla zegar na wszystkich stronach.",
                    "collections": "Kolekcje",
                    "displayAtCollections": "Wyświetla zegar na określonych stronach kolekcji.",
                    "browseCollections": "Pobierz kolekcje",
                    "pickAllCollections": "Wybierz wszystkie kolekcje",
                    "products": "Towary",
                    "displayAtProducts": "Wyświetla zegar na określonych stronach produktów.",
                    "browseProducts": "Pobierz produkty",
                    "cancel": "Odwołaj",
                    "pickAllProducts": "Wybierz wszystkie produkty",
                    "widgetDescription": "Opis widżetu",
                    "widgetDescriptionText": "Zegar kompaktowy dostępny tylko na stronach produktów.",
                    "widgetPlacement": "Lokalizacja widżetu",
                    "aboveTitle": "Powyżej nagłówka",
                    "belowTitle": "Pod nagłówkiem",
                    "abovePrice": "Powyżej ceny",
                    "belowPrice": "Poniżej ceny",
                    "aboveBuyButton": "Powyżej przycisku „Kup”",
                    "belowBuyButton": "Pod przyciskiem „Kup”",
                    "productPagesWithTimer": "Strony produktów z timerem",
                    "utils": "Narzędzia",
                    "repeat": "Powtarzaj timer, gdy się skończy"
                },
                "existing_config": {
                    "existingCountdownTimer": "Istniejący licznik odliczania:",
                    "existingBadgeBanner": "Istniejący baner",
                    "existingAnimationPopup": "Istniejące okno animacji modalnej:",
                    "actions": "Działania:",
                    "timer": "Zegar",
                    "edit": "Edytuj",
                    "delete": "Odinstaluj"
                },
                "animations": {
                    "customize": "Dostosuj swoje okno modalne!",
                    "save": "Zapisz",
                    "pickAnimation": "Wybierz animację",
                    "messageText": "Twoja wiadomość:",
                    "enterText": "Wprowadź tekst...",
                    "productPagesWithPopup": "Strony produktów z modalnym oknem:",
                    "preview": "Podgląd okna modalnego"
                },
                "badges": {
                    "pickCategory": "Wybierz kategorię",
                    "category": "Kategoria:",
                    "pickBadge": "Wybierz ikonę",
                    "bannerPlacement": "Umieszczenie banerów",
                    "productPagesWithBanner": "Strony produktów z banerem"
                },
                "countdown": {
                    "bannerDesign": "Projekt banera",
                    "warningTitle": "Wykryto nakładkę banerów",
                    "warningMessage": "Ten baner zostanie wyświetlony na stronie, na której znajduje się już baner tego typu. Spowoduje to naruszenia w pracy banerów. Przejrzyj luki w zabezpieczeniach i napraw je",
                    "reason": "Luka w zabezpieczeniach",
                    "settings": "Ustawienia"
                },
                "success": {
                    "mainHeading": "Gratulacje!",
                    "messageTimer": "Stworzyłeś zegar odliczania. Teraz, proszę poczekać kilka dni, a dochód zostanie zwiększony o 25%.",
                    "messageBanner": "Utworzono oznakowanie produktu. Proszę poczekać kilka dni, a dochód zwiększy się o 15%.",
                    "messagePopup": "Stworzyłeś okno modalne.Teraz, proszę poczekać kilka dni, a dochód zostanie zwiększony o 20%.",
                    "button": "Do domu"
                },
                "mainScreen": {
                    "secondPageMainSign": "Twoje banery:",
                    "createNew": "Utwórz nowy",
                    "createBanner": "Utwórz baner",
                    "hereIsNo": "Baner tego typu nie został jeszcze utworzony",
                    "toastMessage": "Usunięto baner"
                }
            }
        },
        {
            locale: 'pt',
            strings: {
                "bannerInfo": {
                    "bannerName": "Nome do banner:",
                    "goToConfig": "Ir para Configuração"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Selecione o item com o qual deseja aumentar sua renda.",
                    "countdownTimerBar": "Painel de Temporizador de Contagem",
                    "countdownDescription": "Um temporizador de contagem regressiva especial que pode ser exibido em um produto ou em outras páginas significa que a venda começou!",
                    "countdownRevenue": "Cerca de 20% mais receita",
                    "saleBanner": "Sinal de publicidade",
                    "saleBannerDescription": "Um sinal incrível que destacará a singularidade de seus produtos.",
                    "saleBannerRevenue": "Cerca de 25% mais receita",
                    "animationBanner": "Janela modal com animação",
                    "animationDescription": "Animação de presente para seus clientes!",
                    "animationRevenue": "Cerca de 15% mais receita",
                    "continue": "Continuar"
                },
                "design": {
                    "timerDesign": "Design do temporizador",
                    "backgroundColor": "Cor de fundo:",
                    "bannerHeight": "Altura da Bandeira",
                    "borderWidth": "Largura do limite:",
                    "borderColor": "Cor da borda",
                    "bannerTexts": "Textos de banner:",
                    "firstText": "Primeiro texto",
                    "pleaseEnterText": "Introduza o texto",
                    "secondText": "Segundo texto",
                    "discountLink": "Link de desconto",
                    "title": "Manchete",
                    "link": "Referência:"
                },
                "initPage": {
                    "mainHeader": "Banner de Contagem Regressiva",
                    "subheader": "Aumente as vendas com temporizador de contagem regressiva, animações e banners impressionantes",
                    "button": "Criar Banner"
                },
                "preview": {
                    "bannerPreview": "Pré-visualização",
                    "days": "Dias",
                    "hours": "Horas",
                    "minutes": "Ata",
                    "seconds": "Segundos"
                },
                "primary": {
                    "enterName": "Digite um nome...",
                    "pleaseEnterName": "Introduza o nome",
                    "startDate": "Data de início",
                    "endDate": "Data de término",
                    "timerDisplay": "Tela do temporizador",
                    "banner": "Banner",
                    "widget": "Widget",
                    "timerPosition": "Posição do temporizador na página",
                    "top": "Topo",
                    "displaysTimerTop": "Exibe o temporizador na parte superior da loja.",
                    "bottom": "Fundo",
                    "displaysTimerBottom": "Exibe o temporizador na parte inferior da loja.",
                    "displaySticky": "Exibição fixada",
                    "pagesShown": "Páginas nas quais o temporizador é exibido",
                    "all": "Todos",
                    "displayAtAll": "Exibe o temporizador em todas as páginas.",
                    "collections": "Coleções",
                    "displayAtCollections": "Exibe um temporizador em páginas de coleções específicas.",
                    "browseCollections": "Baixar Coleções",
                    "pickAllCollections": "Selecionar Todas as Coleções",
                    "products": "Bens",
                    "displayAtProducts": "Exibe um temporizador em páginas específicas do produto.",
                    "browseProducts": "Fazer download de produtos",
                    "cancel": "Cancelar",
                    "pickAllProducts": "Selecionar todos os produtos",
                    "widgetDescription": "Descrição do widget",
                    "widgetDescriptionText": "Temporizador compacto disponível apenas em páginas de produtos.",
                    "widgetPlacement": "Localização do widget",
                    "aboveTitle": "Acima da manchete",
                    "belowTitle": "Sob o título",
                    "abovePrice": "Preço acima",
                    "belowPrice": "Abaixo do preço",
                    "aboveBuyButton": "Acima do botão “Comprar”",
                    "belowBuyButton": "Sob o botão “Comprar”",
                    "productPagesWithTimer": "Páginas de produtos com temporizador",
                    "utils": "Utilitários",
                    "repeat": "Repita o temporizador quando terminar"
                },
                "existing_config": {
                    "existingCountdownTimer": "Temporizador de contagem regressiva existente:",
                    "existingBadgeBanner": "Banner existente",
                    "existingAnimationPopup": "Janela de animação modal existente:",
                    "actions": "Ações:",
                    "timer": "Temporizador",
                    "edit": "Editar",
                    "delete": "Desinstale"
                },
                "animations": {
                    "customize": "Personalize sua janela modal!",
                    "save": "Salvar",
                    "pickAnimation": "Selecionar animação",
                    "messageText": "Sua mensagem:",
                    "enterText": "Digite o texto...",
                    "productPagesWithPopup": "Páginas de produtos com janela modal:",
                    "preview": "Visualização da janela modal"
                },
                "badges": {
                    "pickCategory": "Selecione uma categoria",
                    "category": "Categoria:",
                    "pickBadge": "Selecionar um ícone",
                    "bannerPlacement": "Colocação de banner",
                    "productPagesWithBanner": "Páginas de produtos com banner"
                },
                "countdown": {
                    "bannerDesign": "Design de Banners",
                    "warningTitle": "Sobreposição de banner detectada",
                    "warningMessage": "Este banner será exibido em uma página onde já existe um banner desse tipo. Isso causará violações no trabalho dos banners. Revise as vulnerabilidades e corrija-as",
                    "reason": "Vulnerabilidade:",
                    "settings": "Configurações"
                },
                "success": {
                    "mainHeading": "Parabéns!",
                    "messageTimer": "Você criou um temporizador de contagem regressiva. Agora, aguarde alguns dias e sua renda será aumentada em 25%.",
                    "messageBanner": "Você criou uma sinalização de produto. Agora, por favor, aguarde alguns dias e sua renda será aumentada em 15%.",
                    "messagePopup": "Você criou uma janela modal. Now, aguarde alguns dias e sua renda será aumentada em 20%.",
                    "button": "Casa"
                },
                "mainScreen": {
                    "secondPageMainSign": "Seus banners:",
                    "createNew": "Criar um novo",
                    "createBanner": "Criar Banner",
                    "hereIsNo": "Banner deste tipo ainda não foi criado",
                    "toastMessage": "Banner removido"
                }
            }
        },
        {
            locale: 'sv',
            strings: {
                "bannerInfo": {
                    "bannerName": "Banderollens namn:",
                    "goToConfig": "Gå till Konfiguration"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Välj det objekt som du vill öka din inkomst med.",
                    "countdownTimerBar": "Timerpanel för nedräkning",
                    "countdownDescription": "En speciell nedräkningstimer som kan visas på en produkt eller andra sidor innebär att försäljningen har börjat!",
                    "countdownRevenue": "Cirka 20% mer intäkter",
                    "saleBanner": "Reklam tecken",
                    "saleBannerDescription": "Ett otroligt tecken som kommer att lyfta fram unika egenskaper hos dina produkter.",
                    "saleBannerRevenue": "Ungefär 25% mer intäkter",
                    "animationBanner": "Modalt fönster med animering",
                    "animationDescription": "Presentanimering till dina kunder!",
                    "animationRevenue": "Cirka 15% mer intäkter",
                    "continue": "Fortsätt"
                },
                "design": {
                    "timerDesign": "Timer Design",
                    "backgroundColor": "Bakgrundsfärg:",
                    "bannerHeight": "Banderollens höjd",
                    "borderWidth": "Gräns bredd:",
                    "borderColor": "Färg på kantlinje",
                    "bannerTexts": "Banderoll texter:",
                    "firstText": "Första texten",
                    "pleaseEnterText": "Skriv in texten",
                    "secondText": "Andra texten",
                    "discountLink": "Rabatter länk",
                    "title": "Rubrik",
                    "link": "Referens:"
                },
                "initPage": {
                    "mainHeader": "TopSale Countdown banner",
                    "subheader": "Öka försäljningen med nedräkningstimer, animationer och fantastiska banderoller",
                    "button": "Skapa banderoll"
                },
                "preview": {
                    "bannerPreview": "Förhandsgranska",
                    "days": "Dagar",
                    "hours": "Timmar",
                    "minutes": "- Minuter",
                    "seconds": "- Sekunder"
                },
                "primary": {
                    "enterName": "Skriv in ett namn...",
                    "pleaseEnterName": "Ange namnet",
                    "startDate": "Startdatum",
                    "endDate": "Slutdatum",
                    "timerDisplay": "Visning av timer",
                    "banner": "Banderoll",
                    "widget": "Widget",
                    "timerPosition": "Timers position på sidan",
                    "top": "Topp",
                    "displaysTimerTop": "Visar timern längst upp i butiken.",
                    "bottom": "Botten",
                    "displaysTimerBottom": "Visar timern längst ner i butiken.",
                    "displaySticky": "Visa fäst",
                    "pagesShown": "Sidor där timern visas",
                    "all": "Alla",
                    "displayAtAll": "Visar timern på alla sidor.",
                    "collections": "Samlingar",
                    "displayAtCollections": "Visar en timer på specifika samlingssidor.",
                    "browseCollections": "Ladda ner kollektioner",
                    "pickAllCollections": "Välj alla samlingar",
                    "products": "Varor",
                    "displayAtProducts": "Visar en timer på specifika produktsidor.",
                    "browseProducts": "Ladda ner produkter",
                    "cancel": "Avbryt",
                    "pickAllProducts": "Välj alla produkter",
                    "widgetDescription": "Beskrivning av widget",
                    "widgetDescriptionText": "Compact timer tillgänglig endast på produktsidor.",
                    "widgetPlacement": "Plats för widget",
                    "aboveTitle": "Ovanför rubriken",
                    "belowTitle": "Under rubriken",
                    "abovePrice": "Ovanför pris",
                    "belowPrice": "Under priset",
                    "aboveBuyButton": "Ovanför ”Köp” -knappen",
                    "belowBuyButton": "Under knappen ”Köp”",
                    "productPagesWithTimer": "Produktsidor med timer",
                    "utils": "Verktyg",
                    "repeat": "Upprepa timern när den slutar"
                },
                "existing_config": {
                    "existingCountdownTimer": "Befintlig nedräkningstimer:",
                    "existingBadgeBanner": "Befintlig banner",
                    "existingAnimationPopup": "Befintligt fönster för modal animation:",
                    "actions": "Åtgärder:",
                    "timer": "Timer",
                    "edit": "Redigera",
                    "delete": "Avinstallera"
                },
                "animations": {
                    "customize": "Anpassa ditt modala fönster!",
                    "save": "Rädda",
                    "pickAnimation": "Välj animering",
                    "messageText": "Ditt meddelande:",
                    "enterText": "Skriv in text...",
                    "productPagesWithPopup": "Produktsidor med modalt fönster:",
                    "preview": "Förhandsgranskning av modal"
                },
                "badges": {
                    "pickCategory": "Välj en kategori",
                    "category": "Kategori:",
                    "pickBadge": "Välj en ikon",
                    "bannerPlacement": "Banner Placering",
                    "productPagesWithBanner": "Produktsidor med banner"
                },
                "countdown": {
                    "bannerDesign": "Banderoll Design",
                    "warningTitle": "Banderollöverlägg upptäcktes",
                    "warningMessage": "Denna banner visas på en sida där det redan finns en banner av denna typ. Detta kommer att orsaka överträdelser i banderollernas arbete. Granska sårbarheterna och åtgärda dem",
                    "reason": "Sårbarhet:",
                    "settings": "Inställningar"
                },
                "success": {
                    "mainHeading": "Grattis!",
                    "messageTimer": "Du har skapat en nedräkningstimer.Nu, vänta några dagar och din inkomst kommer att ökas med 25%.",
                    "messageBanner": "Du har skapat en produktskyltning. Vänta nu några dagar och din inkomst kommer att ökas med 15%.",
                    "messagePopup": "Du har skapat ett modalt fönster.Nu, vänta några dagar och din inkomst kommer att ökas med 20%.",
                    "button": "Hem"
                },
                "mainScreen": {
                    "secondPageMainSign": "Dina banderoller:",
                    "createNew": "Skapa en ny",
                    "createBanner": "Skapa banderoll",
                    "hereIsNo": "Banner av den här typen har ännu inte skapats",
                    "toastMessage": "Banner borttagen"
                }
            }
        },
        {
            locale: 'th',
            strings: {
                "bannerInfo": {
                    "bannerName": "ชื่อแบนเนอร์:",
                    "goToConfig": "ไปที่การตั้งค่าคอนฟิก"
                },
                "bannerVariants": {
                    "secondPageMainSign": "เลือกรายการที่คุณต้องการเพิ่มรายได้",
                    "countdownTimerBar": "แผงจับเวลาถอยหลัง",
                    "countdownDescription": "นาฬิกานับถอยหลังพิเศษที่สามารถแสดงบนผลิตภัณฑ์หรือหน้าอื่น ๆ หมายถึงการขายได้เริ่มต้นขึ้น!",
                    "countdownRevenue": "รายได้เพิ่มขึ้นประมาณ 20%",
                    "saleBanner": "ป้ายโฆษณา",
                    "saleBannerDescription": "สัญญาณที่น่าทึ่งที่จะเน้นเอกลักษณ์ของผลิตภัณฑ์ของคุณ",
                    "saleBannerRevenue": "รายได้เพิ่มขึ้นประมาณ 25%",
                    "animationBanner": "หน้าต่างโมดอลที่มีภาพเคลื่อนไหว",
                    "animationDescription": "ภาพเคลื่อนไหวของขวัญให้กับลูกค้าของคุณ!",
                    "animationRevenue": "รายได้เพิ่มขึ้นประมาณ 15%",
                    "continue": "ต่อ"
                },
                "design": {
                    "timerDesign": "การออกแบบตัวจับเวลา",
                    "backgroundColor": "สีพื้นหลัง:",
                    "bannerHeight": "ความสูงแบนเนอร์",
                    "borderWidth": "ความกว้างขอบเขต:",
                    "borderColor": "สีเส้นขอบ",
                    "bannerTexts": "ข้อความแบนเนอร์:",
                    "firstText": "ข้อความแรก",
                    "pleaseEnterText": "กรุณากรอกข้อความ",
                    "secondText": "ข้อความที่สอง",
                    "discountLink": "ลิงค์ส่วนลด",
                    "title": "พาดหัวข่าว",
                    "link": "อ้างอิง:"
                },
                "initPage": {
                    "mainHeader": "แบนเนอร์นับถอยหลัง TopSale",
                    "subheader": "เพิ่มยอดขายด้วยตัวจับเวลาถอยหลัง ภาพเคลื่อนไหว และแบนเนอร์ที่น่าทึ่ง",
                    "button": "สร้างแบนเนอร์"
                },
                "preview": {
                    "bannerPreview": "ดูตัวอย่าง",
                    "days": "วัน",
                    "hours": "ชั่วโมง",
                    "minutes": "นาที",
                    "seconds": "วินาที"
                },
                "primary": {
                    "enterName": "ใส่ชื่อ...",
                    "pleaseEnterName": "กรุณากรอกชื่อ",
                    "startDate": "วันที่เริ่มต้น",
                    "endDate": "วันที่สิ้นสุด",
                    "timerDisplay": "แสดงตัวตั้งเวลา",
                    "banner": "แบนเนอร์",
                    "widget": "วิดเจ็ต",
                    "timerPosition": "ตำแหน่งตัวจับเวลาบนหน้า",
                    "top": "ท๊อป",
                    "displaysTimerTop": "แสดงตัวจับเวลาที่ด้านบนของสโตร์",
                    "bottom": "ด้านล่าง",
                    "displaysTimerBottom": "แสดงตัวจับเวลาที่ด้านล่างของสโตร์",
                    "displaySticky": "ตรึงจอแสดงผลไว้",
                    "pagesShown": "หน้าเว็บที่มีการแสดงตัวจับเวลา",
                    "all": "ทั้งหมด",
                    "displayAtAll": "แสดงตัวจับเวลาในทุกหน้า",
                    "collections": "คอลเลกชัน",
                    "displayAtCollections": "แสดงตัวจับเวลาในหน้าคอลเลกชันที่เฉพาะเจาะจง",
                    "browseCollections": "ดาวน์โหลดคอลเล็กชัน",
                    "pickAllCollections": "เลือกคอลเลกชันทั้งหมด",
                    "products": "สินค้า",
                    "displayAtProducts": "แสดงตัวจับเวลาบนหน้าผลิตภัณฑ์ที่เฉพาะเจาะจง",
                    "browseProducts": "ดาวน์โหลดผลิตภัณฑ์",
                    "cancel": "ยกเลิก",
                    "pickAllProducts": "เลือกผลิตภัณฑ์ทั้งหมด",
                    "widgetDescription": "คำอธิบายวิดเจ็ต",
                    "widgetDescriptionText": "จับเวลาขนาดกะทัดรัดใช้ได้เฉพาะบนหน้าผลิตภัณฑ์.",
                    "widgetPlacement": "ตำแหน่งวิดเจ็ต",
                    "aboveTitle": "เหนือพาดหัว",
                    "belowTitle": "ใต้หัวข้อ",
                    "abovePrice": "ราคาข้างต้น",
                    "belowPrice": "ราคาต่ำกว่าราคา",
                    "aboveBuyButton": "เหนือปุ่ม “ซื้อ”",
                    "belowBuyButton": "ภายใต้ปุ่ม “ซื้อ”",
                    "productPagesWithTimer": "หน้าผลิตภัณฑ์ที่มีตัวจับเวลา",
                    "utils": "สาธารณูปโภค",
                    "repeat": "ทำซ้ำตัวจับเวลาเมื่อมันสิ้นสุด"
                },
                "existing_config": {
                    "existingCountdownTimer": "ตัวนับถอยหลังที่มีอยู่:",
                    "existingBadgeBanner": "แบนเนอร์ที่มีอยู่",
                    "existingAnimationPopup": "หน้าต่างภาพเคลื่อนไหวกิริยาที่มีอยู่:",
                    "actions": "การดำเนินการ:",
                    "timer": "จับเวลา",
                    "edit": "แก้ไข",
                    "delete": "ถอนการติดตั้ง"
                },
                "animations": {
                    "customize": "ปรับแต่งหน้าต่างกิริยาของคุณ!",
                    "save": "บันทึก",
                    "pickAnimation": "เลือกภาพเคลื่อนไหว",
                    "messageText": "ข้อความของคุณ:",
                    "enterText": "ป้อนข้อความ...",
                    "productPagesWithPopup": "หน้าผลิตภัณฑ์ที่มีหน้าต่างกิริยา:",
                    "preview": "การแสดงตัวอย่างหน้าต่างแบบโมดัล"
                },
                "badges": {
                    "pickCategory": "เลือกหมวดหมู่",
                    "category": "หมวดหมู่:",
                    "pickBadge": "เลือกไอคอน",
                    "bannerPlacement": "ตำแหน่งแบนเนอร์",
                    "productPagesWithBanner": "หน้าผลิตภัณฑ์ที่มีแบนเนอร์"
                },
                "countdown": {
                    "bannerDesign": "การออกแบบแบนเนอร์",
                    "warningTitle": "ตรวจพบการซ้อนทับแบนเนอร์",
                    "warningMessage": "แบนเนอร์นี้จะปรากฏบนหน้าเว็บที่มีแบนเนอร์ประเภทนี้อยู่แล้วซึ่งจะทำให้เกิดการละเมิดในการทำงานของแบนเนอร์โปรดตรวจสอบช่องโหว่และแก้ไขปัญหา",
                    "reason": "ช่องโหว่:",
                    "settings": "การตั้งค่า"
                },
                "success": {
                    "mainHeading": "ยินดีด้วย!",
                    "messageTimer": "คุณได้สร้างตัวนับถอยหลังแล้วตอนนี้โปรดรอสักสองสามวันและรายได้ของคุณจะเพิ่มขึ้น 25%",
                    "messageBanner": "คุณได้สร้างป้ายผลิตภัณฑ์.ตอนนี้กรุณารอสักสองสามวันและรายได้ของคุณจะเพิ่มขึ้น 15%",
                    "messagePopup": "คุณได้สร้างหน้าต่างกิริยาตอนนี้กรุณารอสักสองสามวันและรายได้ของคุณจะเพิ่มขึ้น 20%",
                    "button": "บ้าน"
                },
                "mainScreen": {
                    "secondPageMainSign": "แบนเนอร์ของคุณ:",
                    "createNew": "สร้างใหม่",
                    "createBanner": "สร้างแบนเนอร์",
                    "hereIsNo": "แบนเนอร์ประเภทนี้ยังไม่ได้รับการสร้างขึ้น",
                    "toastMessage": "ลบแบนเนอร์ออก"
                }
            }
        },
        {
            locale: 'tr',
            strings: {
                "bannerInfo": {
                    "bannerName": "Afiş adı:",
                    "goToConfig": "Yapılandırmaya Git"
                },
                "bannerVariants": {
                    "secondPageMainSign": "Gelirinizi artırmak istediğiniz öğeyi seçin.",
                    "countdownTimerBar": "Geri Sayım Zamanlayıcı Paneli",
                    "countdownDescription": "Bir üründe veya diğer sayfalarda görüntülenebilen özel bir geri sayım sayacı, satışın başladığı anlamına gelir!",
                    "countdownRevenue": "Yaklaşık%20 daha fazla gelir",
                    "saleBanner": "Reklam işareti",
                    "saleBannerDescription": "Ürünlerinizin benzersizliğini vurgulayacak inanılmaz bir işaret.",
                    "saleBannerRevenue": "Yaklaşık%25 daha fazla gelir",
                    "animationBanner": "Animasyonlu modal pencere",
                    "animationDescription": "Müşterilerinize hediye animasyon!",
                    "animationRevenue": "Yaklaşık%15 daha fazla gelir",
                    "continue": "Devam edin"
                },
                "design": {
                    "timerDesign": "Zamanlayıcı Tasarımı",
                    "backgroundColor": "Arka plan rengi:",
                    "bannerHeight": "Banner Yüksekliği",
                    "borderWidth": "Sınır genişliği:",
                    "borderColor": "Kenarlık rengi",
                    "bannerTexts": "Banner metinleri:",
                    "firstText": "İlk metin",
                    "pleaseEnterText": "Lütfen metni girin",
                    "secondText": "İkinci metin",
                    "discountLink": "İndirim bağlantısı",
                    "title": "Manşet",
                    "link": "Referans:"
                },
                "initPage": {
                    "mainHeader": "TopSale Geri Sayım Afişi",
                    "subheader": "Geri sayım sayacı, animasyonlar ve çarpıcı afişler ile satışları artırın",
                    "button": "Banner Oluştur"
                },
                "preview": {
                    "bannerPreview": "Önizleme",
                    "days": "Günler",
                    "hours": "Saatleri",
                    "minutes": "Dakika",
                    "seconds": "Saniye"
                },
                "primary": {
                    "enterName": "Bir isim girin...",
                    "pleaseEnterName": "Lütfen adı girin",
                    "startDate": "Başlangıç tarihi",
                    "endDate": "Bitiş Tarihi",
                    "timerDisplay": "Zamanlayıcı göstergesi",
                    "banner": "Banner",
                    "widget": "Widget",
                    "timerPosition": "Sayfadaki zamanlayıcı konumu",
                    "top": "Üst",
                    "displaysTimerTop": "Zamanlayıcıyı mağazanın üst kısmında görüntüler.",
                    "bottom": "Alt",
                    "displaysTimerBottom": "Zamanlayıcıyı mağazanın alt kısmında görüntüler.",
                    "displaySticky": "Ekran sabitlenmiş",
                    "pagesShown": "Zamanlayıcı görüntülendiği sayfalar",
                    "all": "Tüm",
                    "displayAtAll": "Tüm sayfalarda zamanlayıcıyı görüntüler.",
                    "collections": "Koleksiyonlar",
                    "displayAtCollections": "Belirli koleksiyon sayfalarında bir zamanlayıcı görüntüler.",
                    "browseCollections": "Koleksiyonları İndirin",
                    "pickAllCollections": "Tüm Koleksiyonları Seç",
                    "products": "Mallar",
                    "displayAtProducts": "Belirli ürün sayfalarında bir zamanlayıcı görüntüler.",
                    "browseProducts": "Ürünleri indirin",
                    "cancel": "İptal",
                    "pickAllProducts": "Tüm ürünleri seç",
                    "widgetDescription": "Widget Açıklaması",
                    "widgetDescriptionText": "Kompakt zamanlayıcı sadece ürün sayfalarında mevcuttur.",
                    "widgetPlacement": "Widget Konumu",
                    "aboveTitle": "Başlığın üstünde",
                    "belowTitle": "Başlığın altında",
                    "abovePrice": "Fiyatın üstünde",
                    "belowPrice": "Fiyatın altında",
                    "aboveBuyButton": "“Satın Al” düğmesinin üstünde",
                    "belowBuyButton": "Düğmesinin altında “Satın al”",
                    "productPagesWithTimer": "Zamanlayıcılı ürün sayfaları",
                    "utils": "Yardımcı programlar",
                    "repeat": "Bittiğinde zamanlayıcıyı tekrarlayın"
                },
                "existing_config": {
                    "existingCountdownTimer": "Mevcut Geri Sayım Zamanlayıcı:",
                    "existingBadgeBanner": "Mevcut afiş",
                    "existingAnimationPopup": "Mevcut modal animasyon penceresi:",
                    "actions": "Eylemler:",
                    "timer": "Zamanlayıcı",
                    "edit": "Düzenle",
                    "delete": "Kaldır"
                },
                "animations": {
                    "customize": "Modal pencerenizi özelleştirin!",
                    "save": "Kayıt etmek",
                    "pickAnimation": "Animasyonu Seç",
                    "messageText": "Mesajınız:",
                    "enterText": "Metin girin...",
                    "productPagesWithPopup": "Modal pencereli ürün sayfaları:",
                    "preview": "Modal pencere önizlemesi"
                },
                "badges": {
                    "pickCategory": "Bir kategori seçin",
                    "category": "Kategori:",
                    "pickBadge": "Bir simge seçin",
                    "bannerPlacement": "Banner Yerleştirme",
                    "productPagesWithBanner": "Afiş içeren ürün sayfaları"
                },
                "countdown": {
                    "bannerDesign": "Banner Tasarımı",
                    "warningTitle": "Afiş bindirme algılandı",
                    "warningMessage": "Bu afiş, zaten bu türde bir banner'ın bulunduğu bir sayfada görüntülenecektir. Bu, afişlerin çalışmalarında ihlallere neden olacaktır. Lütfen güvenlik açıklarını gözden geçirin ve düzeltin",
                    "reason": "Güvenlik Açığı:",
                    "settings": "Ayarlar"
                },
                "success": {
                    "mainHeading": "Tebrikler!",
                    "messageTimer": "Bir geri sayım zamanlayı oluşturdunuz. Şimdi, birkaç gün bekleyin ve gelirinizin% 25 oranında artacaktır.",
                    "messageBanner": "Bir ürün tabelası oluşturdunuz. Şimdi, lütfen birkaç gün bekleyin ve gelirinizi%15 oranında artırılacaktır.",
                    "messagePopup": "Bir kalıcı pencere oluşturdunuz. Şimdi, birkaç gün bekleyin ve gelirinizi% 20 oranında artacaktır.",
                    "button": "Ev"
                },
                "mainScreen": {
                    "secondPageMainSign": "Afiş:",
                    "createNew": "Yeni bir oluştur",
                    "createBanner": "Banner Oluştur",
                    "hereIsNo": "Bu türden afiş henüz oluşturulmadı",
                    "toastMessage": "Afiş kaldırıldı"
                }
            }
        },
        ]
};

export const localesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOCALES: return {
            ...state,
            stringsToDisplay: state.localesStorage
                .find(l => action.locale === l.locale)
        };
        default: return state
    }
};

export const setLocales = (locale) => ({type: SET_LOCALES, locale});