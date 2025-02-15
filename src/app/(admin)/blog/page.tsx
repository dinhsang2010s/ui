"use client";
import {
  Button,
  Col,
  Form,
  Input,
  Pagination,
  Row,
  Select,
  Tabs,
  theme,
} from "antd";
import React from "react";
import {
  PlusOutlined,
  EllipsisOutlined,
  MessageOutlined,
  ShareAltOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import Scrollbars from "@/components/scrollbars";
import BackgroundContainer from "@/components/background";

function PageBlog(props) {
  const {
    token: { colorTextBase, colorBgBase },
  } = theme.useToken();

  const itemsTab = () => {
    return ["all", "published", "draft"].map((item) => ({
      key: item,
      label: (
        <div className="flex fw-600">
          <span className="text-transform-capitalize">{item}</span>
          <span
            className={`${styles.tab_filter_total} tag-total`}
            style={{
              background: `${
                item === "published"
                  ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                  : colorTextBase
              }`,
              color: `${
                item === "published" ? "var(--palette-info-dark)" : colorBgBase
              }`,
            }}
          >
            {12}
          </span>
        </div>
      ),
    }));
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <BackgroundContainer>
        <div style={{ height: 200, padding: "0 12px", marginBottom: 16 }}>
          <div className="flex-between mb-8">
            <div className="header-title">Blog</div>
            <Button className="ml-2" type="primary" icon={<PlusOutlined />}>
              New post
            </Button>
          </div>
          <div className="mb-8">
            <Form className="w-full flex-between" layout="inline">
              <Form.Item label="" name="search">
                <Input.Search size="large" placeholder="Search..." />
              </Form.Item>
              <Form.Item label="Sort by" name="sort" style={{ margin: 0 }}>
                <Select
                  style={{ width: 120, background: "transparent" }}
                  value={"newest"}
                />
              </Form.Item>
            </Form>
          </div>
          <Tabs activeKey="published" items={itemsTab()} onChange={onChange} />
        </div>
      </BackgroundContainer>
      <Scrollbars height={"calc(100% - 292px)"}>
        <BackgroundContainer>
          <Row className={styles.row} gutter={[24, 24]}>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={12} sm={24} xs={24}>
              <div className={styles.card_item}>
                <div className={styles.card_body}>
                  <span className="flex-between mb-4" style={{ height: 24 }}>
                    <span
                      className={styles.card_tag}
                      style={{
                        background: `${
                          true
                            ? "rgba(var(--palette-info-mainChannel) / 0.16)"
                            : "rgba(var(--palette-grey-500Channel) / 0.16)"
                        }`,
                      }}
                    >
                      {true ? "Published" : "Draft"}
                    </span>
                    <span className={styles.card_time}>28 Dec 2024</span>
                  </span>
                  <div className="relative flex-1">
                    <div
                      className="w-full h-full absolute"
                      style={{ left: 0, top: 0 }}
                    >
                      <Link
                        href={"/"}
                        className="two-line-ellipsis text-title mb-2"
                      >
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </Link>
                      <span className="two-line-ellipsis text-description mb-2">
                        The Future of Renewable Energy: Innovations and
                        Renewable The Future of Renewable Energy: Innovations
                        and Renewable
                      </span>
                    </div>
                  </div>
                  <div className="flex-between" style={{ height: 36 }}>
                    <Button
                      className={styles.btn_action}
                      icon={<EllipsisOutlined />}
                    />
                    <div className="flex flex-grow-1 text-description">
                      <span className="ml-4">
                        <MessageOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <EyeOutlined className="mr-1" />
                        {12}k
                      </span>
                      <span className="ml-4">
                        <ShareAltOutlined className="mr-1" />
                        {12}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.card_img}>
                  <Image
                    style={{
                      borderRadius: "calc(1.5* var(--shape-borderRadius))",
                    }}
                    width={164}
                    height={224}
                    src="/assets/blog/img_card.png"
                    alt={""}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </BackgroundContainer>
      </Scrollbars>
      <div className="py-4">
        <Pagination align="center" defaultCurrent={1} total={50} />
      </div>
    </>
  );
}

export default PageBlog;
