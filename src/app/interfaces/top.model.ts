export interface Itop {
    current_page:   number;
    data:           TopData[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  null;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

export interface TopData {
    id:            number;
    url:           null | string;
    category_id:   number;
    position:      number;
    cover:         null | string;
    pictures:      string[];
    author_id:     number;
    is_bestseller: number;
    is_new:        number;
    name:          string;
    rate:          number | null;
    p:             number;
    stockOrNot:    number;
    min_picture:   string;
    author:        Author | null;
    category:      Category;
    rates:         Rate[];
    deliveries:    any[];
    variations:    Variation[];
    wishes:        any[];
}

export interface Author {
    id:                 number;
    img:                string;
    best_of_week:       number;
    best_of_week_books: null;
    year_start:         Date | null;
    year_end:           null;
    created_at:         Date;
    updated_at:         Date;
    fullname:           string;
    description:        string;
    country:            string;
    translations:       AuthorTranslation[];
}

export interface AuthorTranslation {
    id:          number;
    author_id:   number;
    locale:      string;
    country:     string;
    fullname:    string;
    description: string;
}

export interface Category {
    id:               number;
    _lft:             number;
    _rgt:             number;
    parent_id:        number;
    icon:             null;
    created_at:       Date;
    updated_at:       Date;
    color:            null | string;
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
    id:          number;
    category_id: number;
    locale:      string;
    name:        string;
    description: null;
}

export interface Rate {
    id:           number;
    user_id:      number;
    ratable_type: string;
    ratable_id:   number;
    rate:         number;
    message:      null | string;
    created_at:   Date;
    updated_at:   Date;
    user:         User;
    likes:        Like[];
}

export interface Like {
    id:         number;
    user_id:    number;
    rate_id:    number;
    action:     Action;
    created_at: Date;
    updated_at: Date;
}

export enum Action {
    Dislike = "dislike",
    Like = "like",
}

export interface User {
    id:               number;
    first_name:       string;
    last_name:        string;
    email:            string;
    address:          null;
    id_number:        null | string;
    image:            null | string;
    type:             string;
    mobile:           null | string;
    fb_token:         null;
    google_token:     null;
    is_admin:         boolean;
    created_at:       Date;
    updated_at:       Date;
    balance:          number;
    company_name:     null;
    company_code:     null;
    birthday:         Date | null;
    gender:           null | string;
    google_user_id:   null | string;
    facebook_user_id: null | string;
    imported:         number;
    last_login:       Date | null;
}

export interface Variation {
    id:                    number;
    variation:             string;
    book_id:               number;
    vendor_id:             string;
    price:                 number;
    discount:              number;
    last_update:           number;
    stock_count:           string;
    stock_count_new:       number;
    created_at:            Date;
    updated_at:            Date;
    start_discount:        null;
    end_discount:          null;
    synced_at:             Date;
    discount_only_website: number;
    discount_value:        number;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
