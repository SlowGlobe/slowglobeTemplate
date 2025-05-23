<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import SGGallery from '@/components/SGGallery.vue'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import SGMapOrbit from '@/components/SGMapOrbit.vue'
const { data: geom } = useTripDetails()
</script>

<template>
  <DetailView>
    <SGHeader>A Graphic Lunch in Ljusdal</SGHeader>

    <SGText>
      This is the third and hopefully final marketplace-based trip to a small town in rural Sweden.
      This time, I was after a graphics card from a small logging town a few hours south of
      Sundsvall, Ljusdal. I thought I was getting the hang of pronouncing Swedish words, but this
      one had me completely thrown. Both L's feel unnecessary to me, as it seems to be pronounced by
      the locals as 'Yoosdar'.
      <br />
      <br />
      Since my last update, winter has come properly. The autumn leaves are long gone, so too is the
      cold and dead interim period before the snow comes.
    </SGText>
    <SGGallery :list="['20241120_124548.jpg', '20241123_144615.jpg']" />
    <SGText
      >That said, it's still not cold enough that ice doesn't form, and today was the most slippery
      that it's been so far. On my way down the hill into town I made the mistake of taking an
      unplowed shortcut, and found myself slowly sliding downhill toward a road, with no way to stop
      until I hit the grit on the road, which was mildly terrifying.
      <br />
      <br />
      Sticking to the marked paths, I repeated my pilgrimage to the ATM, and then found my way by
      train and bus into the town of Ljusdal.
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" />
    <SGText>
      The first thing you notice about Ljusdal station when you arrive is the sheer number of logs
      stacked on the opposite side of the tracks. If you're me, the next thing you notice is the log
      picking up machine with a huge log claw and telescoping cabin so the driver can see over the
      immense stacks of logs that they're slowly stacking onto waiting train cars. Unfortunately, I
      didn't get any pictures of this, as I was too busy trying to find my contact, who was meeting
      me at the station.
      <br />
      <br />
      Eventually, I found Razmus in the red Timrå hoodie, money changed hands, and my backpack got a
      lot heavier. He was a young guy, about my age, who seemed to have lived all over Sweden for
      various reasons, and was hanging out in his hometown for a few months before heading off to go
      work FIFO somewhere in Australia. When I asked him where the best place for lunch was, he
      started giving me directions to the best pizza in town before deciding that he should just
      also go and get some pizza.
      <br />
      <br />
      So we ended up eating pizza and chatting for the next hour and a half while I waited for my
      return bus to arrive. Razmus introduced me to the concept of external sauce for your pizza,
      which is a creamy chive filled side dish that you either dip or spread onto your pizza. It's
      not bad, but possibly unnecessary on what was an excellent meal.
    </SGText>
    <SGText>
      On my way home I had an hour to kill in Hudiksvall, which is a very cute seaside city all
      dressed up for Christmas. I got a chance to wander the town city, complete with canal and
      lake, lovely pastel old buildings, and of course the mandatory church on the hill.
    </SGText>
    <!-- <SGMapCutout :center="[17.10789360017543, 61.726987298161816]" :zoom="15.5" :pitch="60" /> -->
    <SGMapOrbit :center="[17.10789360017543, 61.726987298161816]" :zoom="15.5" :pitch="60" />
    <SGGallery
      :list="[
        { img: '20241126_142457.jpg', coords: [17.107931996545744, 61.726869336238025] },
        '20241126_142952.jpg',
        { img: '20241126_144215.jpg', coords: [17.106549455633626, 61.72819503851662] },
        '20241126_142642.jpg',
        { img: '20241126_143343.jpg', coords: [17.109817945289592, 61.72868861469257] },
        '20241126_143558.jpg',
        '20241126_144102.jpg',
        { img: '20241126_143643.jpg', caption: 'Beware the killer robots (if you\'re grass)' }
      ]"
      :add-photos-to-map="true"
    />
    <SGText>
      Beware the killer robots (if you're grass).
      <br />
      <br />
      I've been really enjoying my marketplace interactions. People warned me that the Swedes could
      be quite reserved and insular, but I've found the opposite to be true. Everyone I've met has
      invited me in for a chat or a drink. It's just a pity that they've all been hours away.
    </SGText>
  </DetailView>
</template>
