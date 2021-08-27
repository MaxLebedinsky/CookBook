export const IS_HEADER_BIG = 'HEADER::IS_BIG';
export const IS_HEADER_SMALL = 'LOGIN::IS_SMALL';

export const isHeaderBig = (isHeaderStatus) => ({
    type: IS_HEADER_BIG,
    isHeaderStatus,
});

export const isHeaderSmall = (isHeaderStatus) => ({
    type: IS_HEADER_SMALL,
    isHeaderStatus,
});



