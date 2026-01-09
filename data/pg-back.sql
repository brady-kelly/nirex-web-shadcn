--
-- PostgreSQL database dump
--

\restrict z0b5Aca02oqYw8MrtRjIKcO4Raksw3FrWwcWgyFan9rBrwjmtEEoghfNDumxoac

-- Dumped from database version 18.1 (Debian 18.1-1.pgdg13+2)
-- Dumped by pg_dump version 18.0

-- Started on 2026-01-09 08:50:43

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3492 (class 0 OID 24725)
-- Dependencies: 225
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Category" (id, name, "desc") FROM stdin;
\.


--
-- TOC entry 3496 (class 0 OID 24747)
-- Dependencies: 229
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Product" (id, name, variant, "desc", "categoryId") FROM stdin;
\.


--
-- TOC entry 3494 (class 0 OID 24736)
-- Dependencies: 227
-- Data for Name: ProductAttribute; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."ProductAttribute" (id, name, value, "productId") FROM stdin;
\.


--
-- TOC entry 3490 (class 0 OID 24632)
-- Dependencies: 223
-- Data for Name: SiteContact; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."SiteContact" (id, name, type, value) FROM stdin;
1	phone	office	+27 12 023 2417
2	whatsapp	office	+27 12 023 2417
3	email	office	order@nirextech.co.za
4	address	office	66 Topaas St, Klerksoord , Akasia, South Africa
5	mapsUrl	office	https://maps.app.goo.gl/tyvA7H6WwNwS9Quk9
6	facebook	social	https://www.facebook.com/NirexTech
7	messenger	social	https://m.me/NirexTech
8	instagram	social	https://www.instagram.com/nirextech/?hl=en
\.


--
-- TOC entry 3488 (class 0 OID 16602)
-- Dependencies: 221
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."User" (id, email, name, pwd) FROM stdin;
\.


--
-- TOC entry 3486 (class 0 OID 16585)
-- Dependencies: 219
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
5616aad6-92b8-4b01-abd0-9984c82f38bb	49a7f06638ced30574f65c3f9d283513048993f6686e870e6f9ea115e0f91b26	2026-01-08 23:57:16.93826+00	20260108235716_init	\N	\N	2026-01-08 23:57:16.925717+00	1
176aee7b-4f19-4807-85e6-b3cc82792ef6	348b5d30fb876acb6374d8a6d507fd2fb4c8bfc3d202ab84733d1e80c9ca9aee	2026-01-09 06:01:16.588449+00	20260109060116_singular	\N	\N	2026-01-09 06:01:16.549424+00	1
dafee1fb-be8d-41c9-a304-d6e41b93b5db	b4e6e3f323ec37436f6b9d41a829b24752cdda8754e326013d7741230bd9d8ec	2026-01-09 06:30:50.702421+00	20260109063050_product	\N	\N	2026-01-09 06:30:50.682274+00	1
f90203d9-d421-48a3-81f9-4e647daccb92	11a2bff6a1a9698f16cfe23dc2c1a21af22ccd47d55edd7baf6aa8158e45c07f	2026-01-09 06:37:32.720497+00	20260109063732_product_rels	\N	\N	2026-01-09 06:37:32.699942+00	1
1eaceccf-d6fc-4e2d-866e-21a8862a09de	95d5fc693d409f3316daf1c8a4f7a4c388abed3960f5ffa5a44da4aee46d594b	2026-01-09 06:44:14.217261+00	20260109064414_product_uniques	\N	\N	2026-01-09 06:44:14.201911+00	1
\.


--
-- TOC entry 3509 (class 0 OID 0)
-- Dependencies: 224
-- Name: Category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Category_id_seq"', 1, false);


--
-- TOC entry 3510 (class 0 OID 0)
-- Dependencies: 226
-- Name: ProductAttribute_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."ProductAttribute_id_seq"', 1, false);


--
-- TOC entry 3511 (class 0 OID 0)
-- Dependencies: 228
-- Name: Product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Product_id_seq"', 1, false);


--
-- TOC entry 3512 (class 0 OID 0)
-- Dependencies: 222
-- Name: SiteContact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."SiteContact_id_seq"', 8, true);


--
-- TOC entry 3513 (class 0 OID 0)
-- Dependencies: 220
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, false);


-- Completed on 2026-01-09 08:50:43

--
-- PostgreSQL database dump complete
--

\unrestrict z0b5Aca02oqYw8MrtRjIKcO4Raksw3FrWwcWgyFan9rBrwjmtEEoghfNDumxoac

