import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Container, Card, Row, Text, Col, Spacer, Button, Input } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Input
        size="xs"
        placeholder="Mini"
      />
      <Spacer y={0.5} />
      <Input
        size="sm"
        placeholder="Small"
      />
      <Spacer y={0.5} />
      <Input
        size="md"
        placeholder="Medium"
      />
      <Spacer y={0.5} />
      <Input
        size="lg"
        placeholder="Large"
      />
      <Spacer y={0.5} />
      <Input
        size="xl"
        placeholder="xLarge"
      />
      <Spacer y={0.5} />
      <Input
        width="120px"
        placeholder="120px"
      />
      <Spacer y={0.5} />
      <Button flat size="xs">Mini</Button>
      <Spacer y={0.5} />
      <Button size="sm">Small</Button>
      <Spacer y={0.5} />
      <Button>Medium</Button>
      <Spacer y={0.5} />
      <Button size="lg">Large</Button>
      <Spacer y={0.5} />
      <Button size="xl">Xlarge</Button>
      <Spacer y={0.5} />
      <Button auto>Auto Width</Button>
    </>
  )
}
