export interface Iblog {
    current_page:   number;
    data:           BlogData[];
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

export interface BlogData {
    id:           number;
    main_page:    number;
    image:        string;
    cover:        string;
    created_at:   Date;
    updated_at:   Date;
    short_text:   string;
    title:        string;
    text:         string;
    translations: Translation[];
}

export interface Translation {
    id:      number;
    blog_id: number;
    locale:  string;
    title:   string;
    text:    string;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
