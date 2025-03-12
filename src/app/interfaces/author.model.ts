export interface Iauthor {
    current_page:   number;
    data:           AuthorData[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  string;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

export interface AuthorData {
    id:                 number;
    img:                null | string;
    best_of_week:       number;
    best_of_week_books: null;
    year_start:         Date | null;
    year_end:           Date | null;
    created_at:         Date;
    updated_at:         Date;
    fullname:           string;
    description:        string;
    country:            string;
    books:              Book[];
    translations:       DatumTranslation[];
}

export interface Book {
    id:            number;
    author_id:     number;
    serie_id:      number;
    isbn:          string;
    min_picture:   string;
    pictures:      string[];
    videos:        null;
    is_bestseller: number;
    is_new:        number;
    category_id:   number;
    year:          number;
    publisher:     null;
    translator:    null;
    language:      null;
    block:         number;
    year_range:    number;
    details:       Details;
    created_at:    Date;
    updated_at:    Date;
    cover:         null;
    position:      number;
    is_palitra:    number;
    url:           null | string;
    status:        number;
    name:          string;
    description:   string;
    wishes:        any[];
    category:      Category;
    translations:  CategoryTranslation[];
}

export interface Category {
    id:               number;
    _lft:             number;
    _rgt:             number;
    parent_id:        number;
    icon:             null;
    created_at:       Date;
    updated_at:       Date;
    color:            null;
    image:            null;
    is_main:          number;
    is_book:          number;
    append_main_page: number;
    block:            number;
    cover_image:      null;
    cover_link:       null;
    has_dropdown:     number;
    banner1:          null;
    banner1_link:     null;
    banner2:          null;
    banner2_link:     null;
    append_header:    number;
    status:           number;
    name:             string;
    description:      null;
    translations:     CategoryTranslation[];
}

export interface CategoryTranslation {
    id:           number;
    category_id?: number;
    locale:       Locale;
    name:         string;
    description:  null | string;
    book_id?:     number;
}

export enum Locale {
    Ka = "ka",
}

export interface Details {
    desc:            null;
    youtube_link:    null;
    soundcloud_link: null;
    book_link:       null;
}

export interface DatumTranslation {
    id:          number;
    author_id:   number;
    locale:      Locale;
    country:     string;
    fullname:    string;
    description: string;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
