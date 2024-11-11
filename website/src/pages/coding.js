// Coding.js
import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './Coding.module.css';

function CodingPage() {
  const [server1, setServer1] = useState(null);
  const [server2, setServer2] = useState(null);
  const [server3, setServer3] = useState(null);

  useEffect(() => {
    const fetchDiscordData = async (inviteCode, setServer) => {
      try {
        const response = await fetch(`https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`);
        const data = await response.json();
        setServer(data.guild ? data : null);
      } catch (error) {
        console.error("Error fetching Discord data:", error);
      }
    };

    fetchDiscordData("DkY36DmduW", setServer1);
    fetchDiscordData("bedrock-add-ons", setServer2);
    fetchDiscordData("JnDe8FmgKM", setServer3);
  }, []);

  // Function to format the member count with 'K' for thousands
  const formatMemberCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K'; // Format as '1.1K', '10K', etc.
    }
    return count; // Return the number as is if it's less than 1000
  };

  return (
    <Layout
      title="Coding for Minecraft Bedrock"
      description="A guide for beginners to start coding for Minecraft Bedrock.">
      <main className={styles.codingContainer}>
        <h1 className={styles.title}>Getting Started with Minecraft Bedrock Coding</h1>
        <p className={styles.intro}>
          Welcome to the beginner's guide to coding for Minecraft Bedrock! Here, you’ll find resources, How To Get Started, and Discords to help you begin your journey.
        </p>

        <section className={styles.discordSection}>
          <h2 className={styles.sectionTitle}>Discord Servers</h2>
          <div className={styles.cardContainer}>
            {server1 && (
              <a href="https://discord.gg/DkY36DmduW" className={styles.discordCard}>
                <img src={`https://cdn.discordapp.com/icons/${server1.guild.id}/${server1.guild.icon}.png`} alt={server1.guild.name} className={styles.serverImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.serverName}>{server1.guild.name}</h3>
                  <p className={styles.memberCount}>{formatMemberCount(server1.approximate_member_count)} Members</p>
                </div>
                <button className={styles.joinButton}>Join</button>
              </a>
            )}
            {server2 && (
              <a href="https://discord.gg/bedrock-add-ons" className={styles.discordCard}>
                <img src={`https://cdn.discordapp.com/icons/${server2.guild.id}/${server2.guild.icon}.png`} alt={server2.guild.name} className={styles.serverImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.serverName}>{server2.guild.name}</h3>
                  <p className={styles.memberCount}>{formatMemberCount(server2.approximate_member_count)} Members</p>
                </div>
                <button className={styles.joinButton}>Join</button>
              </a>
            )}
            {server3 && (
              <a href="https://discord.gg/JnDe8FmgKM" className={styles.discordCard}>
                <img src={`https://cdn.discordapp.com/icons/${server3.guild.id}/${server3.guild.icon}.png`} alt={server3.guild.name} className={styles.serverImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.serverName}>{server3.guild.name}</h3>
                  <p className={styles.memberCount}>{formatMemberCount(server3.approximate_member_count)} Members</p>
                </div>
                <button className={styles.joinButton}>Join</button>
              </a>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default CodingPage;
