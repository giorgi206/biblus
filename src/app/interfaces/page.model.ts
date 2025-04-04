export interface IPage {
    current_page:   number;
    data:           Datum[];
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

export interface Datum {
    id:            number;
    url:           null;
    category_id:   number;
    position:      number;
    cover:         null;
    pictures:      string[];
    author_id:     number;
    is_bestseller: number;
    is_new:        number;
    name:          string;
    rate:          null;
    p:             number;
    stockOrNot:    number;
    min_picture:   string;
    author:        Author | null;
    category:      Category;
    rates:         any[];
    deliveries:    any[];
    variations:    VariationElement[];
    wishes:        any[];
}

export interface Author {
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
    translations:       AuthorTranslation[];
}

export interface AuthorTranslation {
    id:          number;
    author_id:   number;
    locale:      Locale;
    country:     string;
    fullname:    string;
    description: string;
}

export enum Locale {
    Ka = "ka",
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
    name:             Name;
    description:      null;
    translations:     CategoryTranslation[];
}

export enum Name {
    TheᲛხატვრული = "მხატვრული",
}

export interface CategoryTranslation {
    id:          number;
    category_id: number;
    locale:      Locale;
    name:        Name;
    description: null;
}

export interface VariationElement {
    id:                    number;
    variation:             VariationEnum;
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

export enum VariationEnum {
    Defualt = "defualt",
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
