export interface Category {
    id:               number;
    _lft:             number;
    _rgt:             number;
    parent_id:        number | null;
    icon:             null | string;
    created_at:       Date;
    updated_at:       Date;
    color:            null | string;
    image:            null | string;
    is_main:          number;
    is_book:          number;
    append_main_page: number;
    block:            number;
    cover_image:      null | string;
    cover_link:       null | string;
    has_dropdown:     number;
    banner1:          null | string;
    banner1_link:     null | string;
    banner2:          null | string;
    banner2_link:     null | string;
    append_header:    number;
    status:           number;
    book_count:       number;
    name:             string;
    description:      null;
    children:         Category[];
    translations:     Translation[];
}

export interface Translation {
    id:          number;
    category_id: number;
    locale:      Locale;
    name:        string;
    description: null;
}

export enum Locale {
    Ka = "ka",
}
