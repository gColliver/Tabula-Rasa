"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion" 
import Link from 'next/link'


export default function Home() {
  const [offset, setOffset] = useState(0);

  return (
      <div className="min-h-screen w-screen flex flex-col items-center justify-center snap-center">
        <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Mission Statement</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Tabula Rasa: Something New is a student-created, led, and run organization that establishes clubs in public schools around the country, devising policy solutions to gun violence in schools utilizing the engineering process. 
          </p>
          <p>
            493 school shootings occurred in elementary/secondary schools within the last 5 years alone, and students continue to be at risk. Therefore, they should have a say in how policies that directly affect whether they live or die are created and implemented.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Vision Statement</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <h3>Goals: </h3>
          <ul id="visionGoals">
<li>Create clubs in as many high schools and universities around the country as possible</li>
<li>Each club will create action plans and policies about every major pressing political issue from the ground up, using the engineering process.</li>
<li>Ignore previously established structures and systems to ensure no biases bring down the effectiveness of policies and action plans</li>
<li>Share all plans with other clubs, the public, and state delegates.</li>
<li>Provide all of this without being tied to any party and effectively form a party based around the younger generations.</li>

          </ul>
          <h3>Structure:</h3>
          <ul id="visionStructure">
            <li>Each club will be student-led and will use the engineering design process to develop actionable items.</li>
            <li>A decision matrix will be used to choose the most effective fact-based solution</li>
            <li>Solutions will be posted on the organization's Instagram and website</li>
            <li>The website will contain steps on how to start a club at your school, a description of the engineering design process, sample decision matrices, a bulletin board where other clubs' ideas are posted, and information on gun violence in schools, using various sources such as gunviolencearchive.org</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Contact Us</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <h3>Email:</h3>
          <Link href={'mailto:blankslate.somethingnew@gmail.com'} prefetch={false}>
            blankslate.somethingnew@gmail.com
          </Link>
          <h3>Instagram: </h3>
          <Link href={'https://www.instagram.com/tabularasa_somethingnew?igsh=MXMwNjhyMDk3dmhuNQ=='} prefetch={false}>
          https://www.instagram.com/tabularasa_somethingnew
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
}
