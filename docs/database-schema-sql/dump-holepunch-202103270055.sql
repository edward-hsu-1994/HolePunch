--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0 (Debian 13.0-1.pgdg100+1)
-- Dumped by pg_dump version 13.2

-- Started on 2021-03-27 00:55:42

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 17991)
-- Name: holepunch; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA holepunch;


ALTER SCHEMA holepunch OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 17994)
-- Name: cidr_group; Type: TABLE; Schema: holepunch; Owner: postgres
--

CREATE TABLE holepunch.cidr_group (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    cidr_list text[]
);


ALTER TABLE holepunch.cidr_group OWNER TO postgres;

--
-- TOC entry 3004 (class 0 OID 0)
-- Dependencies: 202
-- Name: TABLE cidr_group; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON TABLE holepunch.cidr_group IS '網段組';


--
-- TOC entry 3005 (class 0 OID 0)
-- Dependencies: 202
-- Name: COLUMN cidr_group.name; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.cidr_group.name IS '名稱';


--
-- TOC entry 3006 (class 0 OID 0)
-- Dependencies: 202
-- Name: COLUMN cidr_group.cidr_list; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.cidr_group.cidr_list IS '網段集合';


--
-- TOC entry 201 (class 1259 OID 17992)
-- Name: cidr_group_id_seq; Type: SEQUENCE; Schema: holepunch; Owner: postgres
--

ALTER TABLE holepunch.cidr_group ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME holepunch.cidr_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 204 (class 1259 OID 18004)
-- Name: service; Type: TABLE; Schema: holepunch; Owner: postgres
--

CREATE TABLE holepunch.service (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    port integer NOT NULL,
    protocol character varying(16) NOT NULL,
    logo_url character varying,
    enabled boolean NOT NULL
);


ALTER TABLE holepunch.service OWNER TO postgres;

--
-- TOC entry 3007 (class 0 OID 0)
-- Dependencies: 204
-- Name: TABLE service; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON TABLE holepunch.service IS '服務';


--
-- TOC entry 3008 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN service.name; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service.name IS '服務名稱';


--
-- TOC entry 3009 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN service.port; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service.port IS '服務Listen埠號';


--
-- TOC entry 3010 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN service.protocol; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service.protocol IS '通訊協議(TCP/UDP)';


--
-- TOC entry 3011 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN service.logo_url; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service.logo_url IS '服務Logo圖片網址';


--
-- TOC entry 3012 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN service.enabled; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service.enabled IS '是否啟用';


--
-- TOC entry 206 (class 1259 OID 18014)
-- Name: service_allowlist; Type: TABLE; Schema: holepunch; Owner: postgres
--

CREATE TABLE holepunch.service_allowlist (
    id integer NOT NULL,
    service_id integer NOT NULL,
    service_forward_target_id integer,
    type character varying(255) NOT NULL,
    cidr_group_id integer,
    cidr character varying(255),
    user_group_id integer,
    user_id integer
);


ALTER TABLE holepunch.service_allowlist OWNER TO postgres;

--
-- TOC entry 3013 (class 0 OID 0)
-- Dependencies: 206
-- Name: TABLE service_allowlist; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON TABLE holepunch.service_allowlist IS '容許網段';


--
-- TOC entry 3014 (class 0 OID 0)
-- Dependencies: 206
-- Name: COLUMN service_allowlist.service_id; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_allowlist.service_id IS '服務ID';


--
-- TOC entry 3015 (class 0 OID 0)
-- Dependencies: 206
-- Name: COLUMN service_allowlist.service_forward_target_id; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_allowlist.service_forward_target_id IS '服務轉發目標ID，若為空則表示整個服務';


--
-- TOC entry 3016 (class 0 OID 0)
-- Dependencies: 206
-- Name: COLUMN service_allowlist.type; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_allowlist.type IS '類型(CIDR_GROUP、CIDR、USER_GROUP、USER)';


--
-- TOC entry 3017 (class 0 OID 0)
-- Dependencies: 206
-- Name: COLUMN service_allowlist.cidr_group_id; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_allowlist.cidr_group_id IS '網段組';


--
-- TOC entry 3018 (class 0 OID 0)
-- Dependencies: 206
-- Name: COLUMN service_allowlist.cidr; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_allowlist.cidr IS '網段';


--
-- TOC entry 3019 (class 0 OID 0)
-- Dependencies: 206
-- Name: COLUMN service_allowlist.user_group_id; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_allowlist.user_group_id IS '使用者群組';


--
-- TOC entry 3020 (class 0 OID 0)
-- Dependencies: 206
-- Name: COLUMN service_allowlist.user_id; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_allowlist.user_id IS '使用者ID';


--
-- TOC entry 205 (class 1259 OID 18012)
-- Name: service_allowlist_id_seq; Type: SEQUENCE; Schema: holepunch; Owner: postgres
--

ALTER TABLE holepunch.service_allowlist ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME holepunch.service_allowlist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 208 (class 1259 OID 18024)
-- Name: service_forward_target; Type: TABLE; Schema: holepunch; Owner: postgres
--

CREATE TABLE holepunch.service_forward_target (
    id integer NOT NULL,
    service_id integer NOT NULL,
    name character varying(100) NOT NULL,
    ip_address character varying(255) NOT NULL,
    port integer NOT NULL,
    priority integer NOT NULL,
    enabled boolean NOT NULL
);


ALTER TABLE holepunch.service_forward_target OWNER TO postgres;

--
-- TOC entry 3021 (class 0 OID 0)
-- Dependencies: 208
-- Name: TABLE service_forward_target; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON TABLE holepunch.service_forward_target IS '服務轉發目標';


--
-- TOC entry 3022 (class 0 OID 0)
-- Dependencies: 208
-- Name: COLUMN service_forward_target.service_id; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_forward_target.service_id IS '服務ID';


--
-- TOC entry 3023 (class 0 OID 0)
-- Dependencies: 208
-- Name: COLUMN service_forward_target.name; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_forward_target.name IS '轉發目標名稱';


--
-- TOC entry 3024 (class 0 OID 0)
-- Dependencies: 208
-- Name: COLUMN service_forward_target.ip_address; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_forward_target.ip_address IS 'IP';


--
-- TOC entry 3025 (class 0 OID 0)
-- Dependencies: 208
-- Name: COLUMN service_forward_target.port; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_forward_target.port IS '埠號';


--
-- TOC entry 3026 (class 0 OID 0)
-- Dependencies: 208
-- Name: COLUMN service_forward_target.priority; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_forward_target.priority IS '優先權(0最大)';


--
-- TOC entry 3027 (class 0 OID 0)
-- Dependencies: 208
-- Name: COLUMN service_forward_target.enabled; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.service_forward_target.enabled IS '是否啟用';


--
-- TOC entry 207 (class 1259 OID 18022)
-- Name: service_forward_target_id_seq; Type: SEQUENCE; Schema: holepunch; Owner: postgres
--

ALTER TABLE holepunch.service_forward_target ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME holepunch.service_forward_target_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 203 (class 1259 OID 18002)
-- Name: service_id_seq; Type: SEQUENCE; Schema: holepunch; Owner: postgres
--

ALTER TABLE holepunch.service ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME holepunch.service_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 18037)
-- Name: user; Type: TABLE; Schema: holepunch; Owner: postgres
--

CREATE TABLE holepunch."user" (
    id integer NOT NULL,
    account character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    name character varying(255),
    enabled boolean NOT NULL
);


ALTER TABLE holepunch."user" OWNER TO postgres;

--
-- TOC entry 3028 (class 0 OID 0)
-- Dependencies: 210
-- Name: TABLE "user"; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON TABLE holepunch."user" IS '用戶';


--
-- TOC entry 3029 (class 0 OID 0)
-- Dependencies: 210
-- Name: COLUMN "user".account; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch."user".account IS '帳號';


--
-- TOC entry 3030 (class 0 OID 0)
-- Dependencies: 210
-- Name: COLUMN "user".password; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch."user".password IS '密碼(SHA1)';


--
-- TOC entry 3031 (class 0 OID 0)
-- Dependencies: 210
-- Name: COLUMN "user".name; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch."user".name IS '名稱';


--
-- TOC entry 3032 (class 0 OID 0)
-- Dependencies: 210
-- Name: COLUMN "user".enabled; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch."user".enabled IS '是否啟用';


--
-- TOC entry 212 (class 1259 OID 18047)
-- Name: user_group; Type: TABLE; Schema: holepunch; Owner: postgres
--

CREATE TABLE holepunch.user_group (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    is_admin boolean NOT NULL
);


ALTER TABLE holepunch.user_group OWNER TO postgres;

--
-- TOC entry 3033 (class 0 OID 0)
-- Dependencies: 212
-- Name: TABLE user_group; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON TABLE holepunch.user_group IS '使用者群組';


--
-- TOC entry 3034 (class 0 OID 0)
-- Dependencies: 212
-- Name: COLUMN user_group.name; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.user_group.name IS '名稱';


--
-- TOC entry 3035 (class 0 OID 0)
-- Dependencies: 212
-- Name: COLUMN user_group.is_admin; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.user_group.is_admin IS '是否為管理者';


--
-- TOC entry 211 (class 1259 OID 18045)
-- Name: user_group_id_seq; Type: SEQUENCE; Schema: holepunch; Owner: postgres
--

ALTER TABLE holepunch.user_group ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME holepunch.user_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 213 (class 1259 OID 18052)
-- Name: user_group_member; Type: TABLE; Schema: holepunch; Owner: postgres
--

CREATE TABLE holepunch.user_group_member (
    user_group_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE holepunch.user_group_member OWNER TO postgres;

--
-- TOC entry 3036 (class 0 OID 0)
-- Dependencies: 213
-- Name: TABLE user_group_member; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON TABLE holepunch.user_group_member IS '使用者群組成員';


--
-- TOC entry 3037 (class 0 OID 0)
-- Dependencies: 213
-- Name: COLUMN user_group_member.user_group_id; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.user_group_member.user_group_id IS '使用者群組ID';


--
-- TOC entry 3038 (class 0 OID 0)
-- Dependencies: 213
-- Name: COLUMN user_group_member.user_id; Type: COMMENT; Schema: holepunch; Owner: postgres
--

COMMENT ON COLUMN holepunch.user_group_member.user_id IS '使用者ID';


--
-- TOC entry 209 (class 1259 OID 18035)
-- Name: user_id_seq; Type: SEQUENCE; Schema: holepunch; Owner: postgres
--

ALTER TABLE holepunch."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME holepunch.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2987 (class 0 OID 17994)
-- Dependencies: 202
-- Data for Name: cidr_group; Type: TABLE DATA; Schema: holepunch; Owner: postgres
--

INSERT INTO holepunch.cidr_group OVERRIDING SYSTEM VALUE VALUES (1, 'Cloudflare_IPv4', '{173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,198.41.128.0/17,162.158.0.0/15,197.234.240.0/22,188.114.96.0/20,104.16.0.0/12,172.64.0.0/13,131.0.72.0/22}');
INSERT INTO holepunch.cidr_group OVERRIDING SYSTEM VALUE VALUES (2, 'Cloudflare_IPv6', '{2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32}');


--
-- TOC entry 2989 (class 0 OID 18004)
-- Dependencies: 204
-- Data for Name: service; Type: TABLE DATA; Schema: holepunch; Owner: postgres
--



--
-- TOC entry 2991 (class 0 OID 18014)
-- Dependencies: 206
-- Data for Name: service_allowlist; Type: TABLE DATA; Schema: holepunch; Owner: postgres
--



--
-- TOC entry 2993 (class 0 OID 18024)
-- Dependencies: 208
-- Data for Name: service_forward_target; Type: TABLE DATA; Schema: holepunch; Owner: postgres
--



--
-- TOC entry 2995 (class 0 OID 18037)
-- Dependencies: 210
-- Data for Name: user; Type: TABLE DATA; Schema: holepunch; Owner: postgres
--

INSERT INTO holepunch."user" OVERRIDING SYSTEM VALUE VALUES (1, 'admin', '8291b62e06da5867634ffdee4de277a9342524e3', 'Admin', true);


--
-- TOC entry 2997 (class 0 OID 18047)
-- Dependencies: 212
-- Data for Name: user_group; Type: TABLE DATA; Schema: holepunch; Owner: postgres
--

INSERT INTO holepunch.user_group OVERRIDING SYSTEM VALUE VALUES (1, 'Admins', true);


--
-- TOC entry 2998 (class 0 OID 18052)
-- Dependencies: 213
-- Data for Name: user_group_member; Type: TABLE DATA; Schema: holepunch; Owner: postgres
--

INSERT INTO holepunch.user_group_member VALUES (1, 1);


--
-- TOC entry 3039 (class 0 OID 0)
-- Dependencies: 201
-- Name: cidr_group_id_seq; Type: SEQUENCE SET; Schema: holepunch; Owner: postgres
--

SELECT pg_catalog.setval('holepunch.cidr_group_id_seq', 2, true);


--
-- TOC entry 3040 (class 0 OID 0)
-- Dependencies: 205
-- Name: service_allowlist_id_seq; Type: SEQUENCE SET; Schema: holepunch; Owner: postgres
--

SELECT pg_catalog.setval('holepunch.service_allowlist_id_seq', 1, false);


--
-- TOC entry 3041 (class 0 OID 0)
-- Dependencies: 207
-- Name: service_forward_target_id_seq; Type: SEQUENCE SET; Schema: holepunch; Owner: postgres
--

SELECT pg_catalog.setval('holepunch.service_forward_target_id_seq', 1, false);


--
-- TOC entry 3042 (class 0 OID 0)
-- Dependencies: 203
-- Name: service_id_seq; Type: SEQUENCE SET; Schema: holepunch; Owner: postgres
--

SELECT pg_catalog.setval('holepunch.service_id_seq', 1, false);


--
-- TOC entry 3043 (class 0 OID 0)
-- Dependencies: 211
-- Name: user_group_id_seq; Type: SEQUENCE SET; Schema: holepunch; Owner: postgres
--

SELECT pg_catalog.setval('holepunch.user_group_id_seq', 1, true);


--
-- TOC entry 3044 (class 0 OID 0)
-- Dependencies: 209
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: holepunch; Owner: postgres
--

SELECT pg_catalog.setval('holepunch.user_id_seq', 1, true);


--
-- TOC entry 2843 (class 2606 OID 18001)
-- Name: cidr_group pk_cidr_group_id; Type: CONSTRAINT; Schema: holepunch; Owner: postgres
--

ALTER TABLE ONLY holepunch.cidr_group
    ADD CONSTRAINT pk_cidr_group_id PRIMARY KEY (id);


--
-- TOC entry 2845 (class 2606 OID 18011)
-- Name: service pk_proxy_config_id; Type: CONSTRAINT; Schema: holepunch; Owner: postgres
--

ALTER TABLE ONLY holepunch.service
    ADD CONSTRAINT pk_proxy_config_id PRIMARY KEY (id);


--
-- TOC entry 2847 (class 2606 OID 18021)
-- Name: service_allowlist pk_service_allow_cidr_id; Type: CONSTRAINT; Schema: holepunch; Owner: postgres
--

ALTER TABLE ONLY holepunch.service_allowlist
    ADD CONSTRAINT pk_service_allow_cidr_id PRIMARY KEY (id);


--
-- TOC entry 2849 (class 2606 OID 18028)
-- Name: service_forward_target pk_service_forward_target_id; Type: CONSTRAINT; Schema: holepunch; Owner: postgres
--

ALTER TABLE ONLY holepunch.service_forward_target
    ADD CONSTRAINT pk_service_forward_target_id PRIMARY KEY (id);


--
-- TOC entry 2851 (class 2606 OID 18044)
-- Name: user pk_tbl_1_id; Type: CONSTRAINT; Schema: holepunch; Owner: postgres
--

ALTER TABLE ONLY holepunch."user"
    ADD CONSTRAINT pk_tbl_1_id PRIMARY KEY (id);


--
-- TOC entry 2853 (class 2606 OID 18051)
-- Name: user_group pk_user_group_id; Type: CONSTRAINT; Schema: holepunch; Owner: postgres
--

ALTER TABLE ONLY holepunch.user_group
    ADD CONSTRAINT pk_user_group_id PRIMARY KEY (id);


--
-- TOC entry 2855 (class 2606 OID 18056)
-- Name: user_group_member pk_user_group_member; Type: CONSTRAINT; Schema: holepunch; Owner: postgres
--

ALTER TABLE ONLY holepunch.user_group_member
    ADD CONSTRAINT pk_user_group_member PRIMARY KEY (user_group_id, user_id);


-- Completed on 2021-03-27 00:55:48

--
-- PostgreSQL database dump complete
--

